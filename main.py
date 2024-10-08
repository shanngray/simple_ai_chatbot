from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from dotenv import load_dotenv
import logging

load_dotenv()

app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load OpenAI API key from environment variable
openai_api_key = os.getenv("OPENAI_API_KEY")
if not openai_api_key:
    raise ValueError("OPENAI_API_KEY environment variable not set")

# Initialize ChatOpenAI
chat = ChatOpenAI(temperature=0.7, openai_api_key=openai_api_key)

class Message(BaseModel):
    id: int
    text: str
    isUser: bool

class ChatRequest(BaseModel):
    messages: List[Message]

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        logger.info("Received request: %s", request.json())
        # Convert messages to LangChain format
        langchain_messages = [
            SystemMessage(content="You are a helpful AI assistant."),
        ]
        for msg in request.messages:
            if msg.isUser:
                langchain_messages.append(HumanMessage(content=msg.text))
            else:
                langchain_messages.append(AIMessage(content=msg.text))

        # Generate response using LangChain
        response = chat.invoke(langchain_messages)

        # Create a new Message object for the AI response
        ai_message = Message(
            id=len(request.messages) + 1,
            text=response.content,
            isUser=False
        )

        logger.info("Sending response: %s", ai_message.json())
        return {"message": ai_message}
    except Exception as e:
        logger.error("Error processing request: %s", str(e))
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

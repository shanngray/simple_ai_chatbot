'use client'

import React, { useState } from 'react';
import Header from './Header';
import InputBar from './InputBar';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';

export default function Home() {
  const [messages, setMessages] = useState<{ id: number; text: string; isUser: boolean }[]>([
    { id: 1, text: "Hi there, I'm Kuki 👋", isUser: false },
    { id: 2, text: "I'm a friendly AI, here to chat with you 24/7", isUser: false },
    { id: 3, text: "We could start by getting to know each other if you like 🤗. What is your name?", isUser: false }
  ]);

  const handleSendMessage = async (message: string) => {
    setMessages(prevMessages => [...prevMessages, { id: prevMessages.length + 1, text: message, isUser: true }]);
    
    try {
      console.log("Sending message to API:", message);
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { id: messages.length + 1, text: message, isUser: true }]
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received response from API:", data);

      setMessages(prevMessages => [...prevMessages, { id: prevMessages.length + 1, text: data.message.text, isUser: false }]);
    } catch (error) {
      console.error("Error sending message to API:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <ChatWindow messages={messages} />
        <InputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

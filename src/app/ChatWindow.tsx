import React from 'react';
import Image from 'next/image';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
}

interface ChatWindowProps {
    messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
    return (
        <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
                >
                    {!message.isUser && (
                        <Image
                            src="/kuki-avatar.png"
                            alt="Kuki AI"
                            width={40}
                            height={40}
                            className="rounded-full mr-2"
                        />
                    )}
                    <div className={`max-w-[70%] p-3 rounded-2xl ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {message.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;
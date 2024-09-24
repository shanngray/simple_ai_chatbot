import React, { useState } from 'react';

interface InputBarProps {
    onSendMessage: (message: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with input:", input);
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex p-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow input input-bordered"
                placeholder="Type your message..."
            />
            <button type="submit" className="btn btn-primary ml-2">Send</button>
        </form>
    );
};

export default InputBar;
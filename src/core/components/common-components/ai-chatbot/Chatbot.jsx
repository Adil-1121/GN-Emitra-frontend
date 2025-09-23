// src/components/Chatbot.jsx
import React, { useState } from 'react';
import './chatbot.scss';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Tooltip from '@mui/material/Tooltip'; // ✅ Tooltip imported

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { from: 'user', text: input };
            setMessages([...messages, userMessage]);
            setInput('');

            // Simulated bot response
            setTimeout(() => {
                setMessages(prev => [...prev, { from: 'bot', text: 'This is a placeholder response.' }]);
            }, 500);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="chatbot">
            {!isOpen && (
                <Tooltip title="Open Chatbot" arrow>
                    <div className="chatbot__toggle" onClick={toggleChat}>
                        <ChatIcon />
                    </div>
                </Tooltip>
            )}

            {isOpen && (
                <div className="chatbot__window">
                    <div className="chatbot__header">
                        <h4>GN E-Mitra AI Assistant</h4>
                        <Tooltip title="Close" arrow>
                            <div className="chatbot__close-btn" onClick={toggleChat}>
                                <CloseIcon />
                            </div>
                        </Tooltip>
                    </div>

                    <div className="chatbot__messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chatbot__message-wrapper ${msg.from}`}
                            >
                                <div className="chatbot__avatar">
                                    {msg.from === 'user' ? <PersonIcon /> : <SmartToyIcon />}
                                </div>
                                <div className={`chatbot__message ${msg.from}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chatbot__input-area">
                        <div className="chatbot__input-wrapper">
                            <SearchOutlinedIcon className="chatbot__input-icon" />
                            <input
                                type="text"
                                placeholder="Ask me anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        <Tooltip title="Send Message" arrow>
                            <button onClick={handleSend}>
                                <SendIcon />
                            </button>
                        </Tooltip>
                    </div>


                </div>
            )}
        </div>
    );
};

export default Chatbot;

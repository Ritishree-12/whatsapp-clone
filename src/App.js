import React, { useState } from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import ChatWindow from './component/ChatWindow';

function App() {
    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    return (
        <div className="app">
            <Sidebar onChatSelect={handleChatSelect} />
            <ChatWindow selectedChat={selectedChat} />
        </div>
    );
}

export default App;

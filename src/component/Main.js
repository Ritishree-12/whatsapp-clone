import React, { useState } from 'react'
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import '../App.css';


const Main = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };
    return (
        <div className='app'>
            <Sidebar onChatSelect={handleChatSelect} />
            <ChatWindow selectedChat={selectedChat} />
        </div>
    )
}

export default Main
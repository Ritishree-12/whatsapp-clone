import React from 'react';
import { FaCommentAlt, FaEllipsisV, FaUsers, FaClock, FaComments } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onChatSelect }) => {
    const chatItems = [
        { name: 'Eztruck Durga', imgSrc: '../../assets/img.jpg', message: 'Hello there!' },
        { name: 'Print Rasulgarh', imgSrc: '../../assets/img2.jpg', message: 'How are you?' },
        { name: 'Narayan Institute Python', imgSrc: '../../assets/img.jpg', message: 'New Python course available' },
        { name: 'Raj', imgSrc: '../../assets/img2.jpg', message: 'Meeting at 5 PM' },
        { name: 'Runu Hyd', imgSrc: '../../assets/img.jpg', message: 'Can we talk?' },
        { name: 'Miku', imgSrc: '../../assets/img2.jpg', message: 'Happy Birthday!' }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="header-left">
                    <h2>Chats</h2>
                </div>
                <div className="header-right">
                    <FaCommentAlt className="header-icon" />
                    <FaEllipsisV className="header-icon" />
                </div>
            </div>
            <div className="sidebar-search">
                <input type="text" placeholder="Search or start new chat" />
            </div>
            <div className="sidebar-buttons">
                <button className="btn">
                    <FaComments />
                    <span>All</span>
                </button>
                <button className="btn">
                    <FaClock />
                    <span>Unread</span>
                </button>
                <button className="btn">
                    <FaUsers />
                    <span>Groups</span>
                </button>
            </div>
            <div className="chat-list">
                {chatItems.map((item, index) => (
                    <div className="chat-item" key={index} onClick={() => onChatSelect(item)}>
                        <img src={item.imgSrc} alt={item.name} className="chat-item-img" />
                        <div className="chat-item-text">
                            <span className="chat-item-name">{item.name}</span>
                            <span className="chat-item-message">{item.message}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

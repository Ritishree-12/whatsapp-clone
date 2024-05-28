import React from 'react';

const ChatList = ({ onChatSelection }) => {
  const chatData = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello, how are you?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'I need your help.' },
    // Add more chat data here
  ];

  return (
    <div className="chat-list">
      {chatData.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => onChatSelection(chat)}
        >
          <img src="user-avatar.png" alt="User Avatar" />
          <div>
            <h3>{chat.name}</h3>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
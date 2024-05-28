import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaPlus, FaRegSmile } from 'react-icons/fa';
import './ChatWindow.css';

const emojiList = ['😀', '😂', '😍', '🥺', '😎', '😭', '🤔', '👍', '🙏'];

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
      console.log("Selected Chat changed:", selectedChat);
      if (selectedChat) {
          setMessages([
              { text: 'Hello', type: 'received' },
              { text: 'Hi', type: 'sent' },
          ]);
      }
  }, [selectedChat]);

  const handleSendMessage = () => {
      if (newMessage.trim() !== '') {
          const newSentMessage = { text: newMessage, type: 'sent' };
          console.log("Sending message:", newSentMessage);
          setMessages([...messages, newSentMessage]);
          setNewMessage('');
      }
  };

  const handleInputChange = (e) => {
      console.log("Input changed:", e.target.value);
      setNewMessage(e.target.value);
  };

  const handleOpenDocuments = () => {
      console.log("Opening documents...");
      document.getElementById('fileInput').click();
  };

  const handleToggleEmojiPicker = () => {
      console.log("Toggling emoji picker...");
      setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji) => {
      console.log("Emoji clicked:", emoji);
      setNewMessage(newMessage + emoji);
      setShowEmojiPicker(false);
  };
    return (
        <div className="chat-window">
            <div className="chat-header">
                <img
                    src={selectedChat ? selectedChat.imgSrc : ''}
                    alt="profile"
                    className="profile-icon"
                />
                <span>{selectedChat ? selectedChat.name : 'Select a chat'}</span>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.type}`}>
                        <span>{message.text}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <button className="icon-button" onClick={handleOpenDocuments}>
                    <FaPlus />
                </button>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => console.log(e.target.files)}
                />
                <button className="icon-button" onClick={handleToggleEmojiPicker}>
                    <FaRegSmile />
                </button>
                {showEmojiPicker && (
                    <div className="emoji-picker">
                        {emojiList.map((emoji, index) => (
                            <span key={index} onClick={() => handleEmojiClick(emoji)}>
                                {emoji}
                            </span>
                        ))}
                    </div>
                )}
                <input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={handleInputChange}
                />
                <button className="send-button" onClick={handleSendMessage}>
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;

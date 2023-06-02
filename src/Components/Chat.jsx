import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    
    const initialMessages = [
      { id: 1, text: "Hello!", sender: "User" },
      { id: 2, text: "Hi there!", sender: "Bot" },
    ];
    setMessages(initialMessages);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "User",
      };

      setMessages([...messages, newMessage]);
      setInputValue("");

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "I am a bot. How can I assist you?",
          sender: "Bot",
        };
        setMessages([...messages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.sender}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

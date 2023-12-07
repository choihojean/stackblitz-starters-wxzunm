import React, { useState, useRef } from 'react';
import { chat, chatHistory, dalle } from './openai';

export default function AppGptHistory() {
  const [text, setText] = useState('hello');
  const [messages, setMessages] = useState([]);
  const refText = useRef();

  const sendChat = () => {
    const prompt = text;
    setText('');
    refText.current.focus();
    setMessages((messages) => [...messages, { role: 'user', content: prompt }]);
    chatHistory(prompt, messages, (result) => {
      setMessages((messages) => [
        ...messages,
        { role: 'assistant', content: result },
      ]);
    });
  };

  return (
    <div style={{ flex: 1 }}>
      <div style={{ flex: 10 }}>
        {messages.map((msg) => (
          <div style={{ color: msg.role == 'user' ? '' : 'blue' }}>
            {msg.role == 'user' ? 'Q:' : 'A:'}
            {msg.content}
          </div>
        ))}
      </div>

      <div style={{ flex: 3 }}>
        <div style={{ flexDirection: 'row' }}>
          <input
            type="text"
            style={{
              width: 300,
              fontSize: 15,
              borderColor: 'red',
              borderWidth: 2,
            }}
            onChange={(evt) => setText(evt.target.value)}
            ref={refText}
            value={text}
          />
          <button onClick={() => sendChat()}>Send</button>
        </div>
      </div>
    </div>
  );
}

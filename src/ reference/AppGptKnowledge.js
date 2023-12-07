import React, { useState, useRef } from 'react';
import { chatHistory } from './openai';

export default function AppGptKnowledge() {
  const knowledge = `아래 시험 점수가 있습니다.
        홍길동 : 국어 70,  영어 90, 수학 20
        이순신 : 국어 80,  영어 100,  수학 90
        위 내용을 파악해주세요.`;
  const initial = [
    { role: 'user', content: knowledge },
    { role: 'assistant', content: '네. 내용을 충분히 이해했습니다.' },
  ];

  const [text, setText] = useState('국어 점수의 평균은 얼마인가요?');
  const [messages, setMessages] = useState(initial);
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
        {messages
          .filter((m, idx) => idx >= initial.length)
          .map((msg) => (
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

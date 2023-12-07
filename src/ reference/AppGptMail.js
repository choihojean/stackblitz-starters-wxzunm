import React, { useState, useRef } from 'react';
import { chat } from './openai';

export default function AppGptMail() {
  const [subject, setSubject] = useState('오늘 오전에 다툰사건');
  const [to, setTo] = useState('친구');
  const [style, setStyle] = useState('서운한 감정이 들어나도록');
  const [result, setReult] = useState('');

  const generateMail = () => {
    const prompt = `당신은 글을 매우 잘쓰는 작가입니다. 
아래와 같은 내용으로 ${style} 메일을 작성해주세요.
내용 :  ${subject}
대상 :  ${to}`;
    chat(prompt, (result) => setReult(result));
  };

  return (
    <div>
      <div style={{ flexDirection: 'row' }}>
        <div>주제: </div>
        <input
          type="text"
          style={{ fontSize: 15, borderWidth: 2 }}
          onChange={(evt) => setSubject(evt.target.value)}
          value={subject}
        />
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div>대상: </div>
        <input
          type="text"
          style={{ fontSize: 15, borderWidth: 2 }}
          onChange={(evt) => setTo(evt.target.value)}
          value={to}
        />
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div>스타일: </div>
        <input
          type="text"
          style={{ fontSize: 15, borderWidth: 2 }}
          onChange={(evt) => setStyle(evt.target.value)}
          value={style}
        />
      </div>

      <button onClick={() => generateMail()}>메일작성</button>
      <div>결과:{result}</div>
    </div>
  );
}

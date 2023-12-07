import React, { useState, useRef } from 'react';
import { chat, dalle } from './openai';

export default function AppGptDalle() {
  const [text, setText] = useState('사과 먹는 호랑이');
  const [result, setReult] = useState([]);
  const makeImage = () => {
    const prompt = `다음문장을 영어로 번역해주세요${text}`;
    chat(prompt, (result) => {
      dalle(
        result,
        (images) => {
          console.log(images);
          setReult(images);
        },
        4
      );
    });
  };

  return (
    <div>
      <textarea
        row="4"
        cols="40"
        type="text"
        style={{
          fontSize: 15,
          borderWidth: 2,
          textAlignVertical: 'top',
        }}
        onChange={(evt) => setText(evt.target.value)}
        value={text}
      />
      <br />
      <button onClick={() => makeImage()}>이미지</button>
      <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {result.map((image) => (
          <img src={image.url} style={{ width: 128, height: 128 }} />
        ))}
      </div>
    </div>
  );
}

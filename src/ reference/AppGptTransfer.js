import React, { useState, useRef } from 'react';
import { chat } from './openai';

export default function AppGptTransfer() {
  const [text, setText] = useState('여우가 게으른 개를 뛰어 넘었다');
  const [result, setReult] = useState('');

  const runTransfer = (mode) => {
    const map = {
      낚시: `다음문장을 낚시성 스타일로 변경해주세요\n${text}`,
      영어: `다음문장을 영어로 변경해주세요\n${text}`,
      불어: `다음문장을 불어로 변경해주세요\n${text}`,
    };

    const prompt = map[mode];
    console.log(prompt);
    chat(prompt, (result) => setReult(result));
  };

  return (
    <div>
      <textarea
        rows="3"
        cols="30"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <div>
        <button onClick={() => runTransfer('낚시')}>낚시</button>
        <button onClick={() => runTransfer('영어')}>영어</button>
        <button onClick={() => runTransfer('불어')}>불어</button>
      </div>
      <div>결과:{result}</div>
    </div>
  );
}

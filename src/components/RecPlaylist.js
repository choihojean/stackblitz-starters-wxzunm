import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RecPlaylist(playlist) {
  const [message, setMessage] = useState('');
  let sendMessage = '플레이 리스트 재생목록에 ';
  playlist.data.map((music) => (sendMessage += music.title + ', '));
  sendMessage += '가 있는 음악어플 사용자에게 어울리는 음악 5개를 추천해줘';
  /*
    '가 있는 음악어플 사용자에게 어울리는 음악 5개를 추천하는데 양식은 시작은 추천하는 음악은으로 시작하고고 5개음악을 나열하는데 나열할 때는 제목과 가수만 쓰고 이후에 5개음악을 공통적으로 추천하는 이유를 사람에게 말하듯이 30글자 이내로 간단하게 쓰는데 재생목록에 있는 음악들을 언급하지 말아줘';
    */

  console.log(sendMessage);
  const chat = async ({ sendMessage }) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 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',
    };
    const messages = [{ role: 'user', content: sendMessage }];
    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          temperature: 0.5,
          messages: messages,
        },
        { headers }
      )
      .then((response) => {
        console.log(response.data.choices[0].message.content);
        setMessage(response.data.choices[0].message.content);
      })
      .catch(console.log);
  };

  return (
    <div>
      <button onClick={() => chat({ sendMessage })}>
        플레이리스트에 어울리는 음악 추천
      </button>
      <p></p>
      <p>{message}</p> <p></p>
    </div>
  );
}

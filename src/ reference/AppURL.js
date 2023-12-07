import React, { useState } from 'react';

export default function AppURL() {
  const cities = ['부산', '제주'];
  const videos = [
    ['Perfect Night', 36910957],
    ['Baddie', 36871671],
    ['Love Lee', 36713849],
  ];

  const url = 'https://search.naver.com/search.naver?where=nexearch&query=';

  const url2 = 'https://www.melon.com/video/detail2.htm?songId=';

  const openURL = (url) => {
    window.open(url);
  };

  return (
    <div>
      <div>
        날씨
        <br />
        {cities.map((city) => (
          <button as="a" onClick={() => openURL(url + city + '날씨')}>
            {city + '날씨'}
          </button>
        ))}
      </div>
      <div>
        최신 음악
        <br />
        {videos.map((video) => (
          <button as="a" onClick={() => openURL(url2 + video[1])}>
            {video[0]}
          </button>
        ))}
      </div>
    </div>
  );
}

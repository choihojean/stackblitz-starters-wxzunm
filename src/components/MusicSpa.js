import React, { useState, useContext } from 'react';
import Playlist from './Playlist';
import PlaylistBJ from './PlaylistBJ';
import PlaylistHJ from './PlaylistHJ';
import MainPage from './MainPage';
import Profile from './Profile';
import UserContext from './UserContext';

function MusicSpa() {
  const [current, setCurrent] = useState('main');
  const { currentUserId } = useContext(UserContext);

  const handleRouteMain = () => {
    setCurrent('main');
  };

  return (
    <div>
      <div>
        <button onClick={() => setCurrent('profile')}>프로필 선택</button>
      </div>
      <div>
        <button onClick={handleRouteMain}>메인 페이지</button>
        {currentUserId === 1 ? (
          <button onClick={() => setCurrent('playlistBJ')}>
            범준의 플레이리스트
          </button>
        ) : currentUserId === 2 ? (
          <button onClick={() => setCurrent('playlistHA')}>
            형안의 플레이리스트
          </button>
        ) : currentUserId === 3 ? (
          <button onClick={() => setCurrent('playlistHJ')}>
            호진의 플레이리스트
          </button>
        ) : null}
      </div>
      {current === 'profile' && <Profile handleRouteMain={handleRouteMain} />}
      {current === 'main' && <MainPage />}
      {current === 'playlistBJ' && <PlaylistBJ />}
      {current === 'playlistHA' && <Playlist />}
      {current === 'playlistHJ' && <PlaylistHJ />}
    </div>
  );
}
export default MusicSpa;

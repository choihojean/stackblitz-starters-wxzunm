// Playlist.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AudioPlayer from './AudioPlayer';
import RecPlaylist from './RecPlaylist';

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('플레이리스트');
  const [newPlaylistName, setNewPlaylistName] = useState(playlistName);
  const [currentMusic, setCurrentMusic] = useState(null);

  useEffect(() => {
    // 음악 정보 가져오기
    axios
      .get(`https://music-json.run.goorm.site/playlistHA`)
      .then((response) => {
        setPlaylist(response.data);
      })
      .catch((error) => {
        console.error('JSON 서버에서 플레이리스트 데이터 못가져옴', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://music-json.run.goorm.site/playlistHA/${id}`
      );
      setPlaylist(playlist.filter((p) => p.id !== id));
      console.log('deleted', res.status);
    } catch (error) {
      console.log(error);
    }
  };

  const changePlaylistName = () => {
    setPlaylistName(newPlaylistName);
  };

  const playMusic = (music) => {
    setCurrentMusic(music);
  };

  const handlePrev = (prevMusic) => {
    setCurrentMusic(prevMusic);
  };

  const handleNext = (nextMusic) => {
    setCurrentMusic(nextMusic);
  };

  return (
    <div>
      <h1>
        형안의 {playlistName}
      </h1>
      <input
        type="text"
        placeholder="플레이리스트 이름"
        onChange={(evt) => setNewPlaylistName(evt.target.value)}
      />
      <button onClick={changePlaylistName}>플레이리스트 이름 변경하기</button>
      <p></p>
      <RecPlaylist data={playlist} />
      {currentMusic && (
        <div className="audio-player-wrapper">
          <AudioPlayer
            musics={playlist}
            currentMusic={currentMusic}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      )}

      {playlist.map((music) => (
        <div key={music.id} style={{ marginBottom: '20px' }}>
          <img
            src={music.albumCover}
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              cursor: 'pointer',
            }}
            className="album-cover"
            width="50"
            onClick={() => playMusic(music)} // 클릭 시 음악 선택
          />
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            {music.title} -
          </div>
          <div style={{ display: 'inline-block' }}>{music.artist}</div>
          <div>
            <button onClick={() => handleDelete(music.id)}>삭제</button>
          </div>
          {/* <audio controls>
            <source src={music.audioSrc} type="audio/mp3" />
          </audio> */}
        </div>
      ))}
    </div>
  );
};

export default Playlist;

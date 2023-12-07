import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MusicCard from './MusicCard';
import AudioPlayer from './AudioPlayer';
import UserContext from './UserContext';

const MainPage = () => {
  const [musics, setMusics] = useState([]);
  const [playlist, setPlaylist] = useState([]); //플레이리스트 중복 체크
  const [playlistBJ, setPlaylistBJ] = useState([]);
  const [playlistHJ, setPlaylistHJ] = useState([]);
  const [currentMusic, setCurrentMusic] = useState(null);
  const { currentUserId } = useContext(UserContext);

  const playMusic = (selectedMusic) => {
    setCurrentMusic(selectedMusic);
  };

  const handlePrev = (prevMusic) => {
    setCurrentMusic(prevMusic);
  };

  const handleNext = (nextMusic) => {
    setCurrentMusic(nextMusic);
  };

  console.log('mainpage currentUserId, ', currentUserId);

  useEffect(() => {
    // 음악 정보 가져오기
    axios
      .get('https://music-json.run.goorm.site/musics')
      .then((response) => {
        setMusics(response.data);
      })
      .catch((error) => {
        console.error('Error fetching music data:', error);
      });
  }, []);

  const addToPlaylist = async (selectedMusic) => {
    try {
      let response;

      if (currentUserId === 1) {
        response = await axios.post(
          'https://music-json.run.goorm.site/playlistBJ',
          selectedMusic
        );
      } else if (currentUserId === 2) {
        response = await axios.post(
          'https://music-json.run.goorm.site/playlistHA',
          selectedMusic
        );
      } else if (currentUserId === 3) {
        response = await axios.post(
          'https://music-json.run.goorm.site/playlistHJ',
          selectedMusic
        );
      }
      // const isMatchingId = playlistBJ.map(
      //   (music) => music.id === selectedMusic.id
      // );
      // const isMatchingId = playlist.map(
      //   (music) => music.id === selectedMusic.id
      // );
      // const isMatchingId = playlistHJ.map(
      //   (music) => music.id === selectedMusic.id
      // );
      // const isIdMatched = isMatchingId.includes(true);

      if (response.status === 505 || isIdMatched) {
        console.log('이미 플레이리스트에 있는 음악입니다!', response);
      } else if (response.status == 201) {
        console.log('음악이 재생목록에 추가되었습니다.', response);
      }
    } catch (error) {
      if (response.status == 505 || isMatchingId) {
        console.log('이미 플레이리스트에 있는 음악입니다!', error);
      }
      console.log('addToPlaylistError: ', error);
    }
  };

  return (
    <div className="main-page">
      <h1>강남 뮤직 플레이어</h1>
      {currentMusic && (
        <AudioPlayer
          musics={musics}
          currentMusic={currentMusic}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
      <div className="music-list">
        {musics.map((music) => (
          <MusicCard
            key={music.id}
            music={music}
            addToPlaylist={addToPlaylist}
            playMusic={playMusic}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;

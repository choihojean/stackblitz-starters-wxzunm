// AudioPlayer.js
import React, { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ musics, currentMusic, onPrev, onNext }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true); // 초기에 재생 상태로 설정

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentMusic.audioSrc;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentMusic, isPlaying]);

  const handlePrev = () => {
    const currentIndex = musics.findIndex(
      (music) => music.id === currentMusic.id
    );
    const prevIndex = (currentIndex - 1 + musics.length) % musics.length;
    onPrev(musics[prevIndex]);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const currentIndex = musics.findIndex(
      (music) => music.id === currentMusic.id
    );
    const nextIndex = (currentIndex + 1) % musics.length;
    onNext(musics[nextIndex]);
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleEnded = () => {
      // 오디오 재생이 끝났을 때 다음 곡으로 넘어가기
      handleNext();
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentMusic, handleNext]);


  return (
    <div className="audio-player">
      <audio ref={audioRef} controls autoPlay={isPlaying} />
      <div className="player-controls">
        <button onClick={handlePrev}>이전 곡</button>
        <button onClick={handleNext}>다음 곡</button>
      </div>
    </div>
  );
};

export default AudioPlayer;

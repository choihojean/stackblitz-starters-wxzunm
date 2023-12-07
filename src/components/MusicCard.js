import React from 'react';

const MusicCard = ({ music, addToPlaylist, playMusic }) => {
  const { albumCover, title, artist, audioSrc } = music;

  return (
    <div className="music-card" onClick={() => playMusic(music)}>
      <img
        src={albumCover}
        alt={`${title} Album Cover`}
        className="album-cover"
        style={{ width: '150px', Height: '100px' }}
      />

      <div className="music-info">
        <h4 style={{ margin: '1px' }}>{title}</h4>
        <p style={{ margin: '1px' }}>{artist}</p>
        <button
          onClick={() => addToPlaylist(music)}
          style={{ marginBottom: '15px' }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default MusicCard;

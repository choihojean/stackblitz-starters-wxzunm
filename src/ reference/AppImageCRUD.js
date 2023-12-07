import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AppImageCRUD() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://choiktnode.run.goorm.site/images')
      .then((response) => setImages(response.data))
      .catch(console.log);
  }, []);

  return (
    <div>
      <div>이미지목록</div>
      {images.map((image) => (
        <div>
          <div>{image.title}</div>
          <img
            src={image.uri}
            style={{ width: 128, height: 128, marginBottom: 20 }}
          />
        </div>
      ))}
    </div>
  );
}

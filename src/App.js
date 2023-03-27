import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const cachedImages = JSON.parse(localStorage.getItem('images'));
    if (cachedImages) {
      setImages(cachedImages);
    } else {
      fetchImages();
    }
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/images');
      const data = await response.json();
      localStorage.setItem('images', JSON.stringify(data));
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>3D Images Viewer</h1>
      <div className="image-container">
        {images.map(image => (
          <img key={image} src={`http://localhost:8001/images/${image}`} alt="3D Clicks" />
        ))}
      </div>
    </div>
  );
}

export default App;



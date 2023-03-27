import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/images')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);
  
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


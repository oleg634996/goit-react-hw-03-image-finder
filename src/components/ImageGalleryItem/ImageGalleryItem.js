// import { Component } from 'react';

export default function ImageGalleryItem({ onImage, onClick }) {
  const { webformatURL, tags, largeImageURL } = onImage;
  const fullImage = () => onClick(largeImageURL);
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} onClick={fullImage} />
    </li>
  );
}

// import { Component } from 'react';

export default function ImageGalleryItem({ image, onClickImg }) {
  const { tags, webformatURL, largeImageURL } = image;
  const fullImage = () => onClickImg(largeImageURL);
  return (
    <li className="gallery-item" onClick={fullImage}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

// import { Component } from 'react';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({ onImage, onClick }) {
  const { webformatURL, tags, largeImageURL } = onImage;
  const fullImage = () => onClick(largeImageURL);
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} onClick={fullImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onImage: PropTypes.object,
  webformatURL: PropTypes.string,
  onClick: PropTypes.func,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};

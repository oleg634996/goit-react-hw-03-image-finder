import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { nameImage, onClick } = this.props;
    console.log(nameImage);

    return (
      <ul className="gallery">
        {nameImage.map(nameImg => {
          return (
            <ImageGalleryItem
              image={nameImg}
              key={nameImg.id}
              onClickImg={onClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;

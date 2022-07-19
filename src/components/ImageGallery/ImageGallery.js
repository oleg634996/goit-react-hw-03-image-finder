import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { onRenderImg, onClick } = this.props;

    return (
      <ul className="gallery">
        {onRenderImg.map(image => {
          return (
            <ImageGalleryItem
              onImage={image}
              key={image.id}
              onClick={onClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  onRenderImg: PropTypes.array,
  onClick: PropTypes.func,
};

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, onShow }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ webformatURL, largeImageURL, id, tags }, index) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onShow={onShow}
          tags={tags}
          key={`${id}${index}`}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array,
  onShow: propTypes.func,
};

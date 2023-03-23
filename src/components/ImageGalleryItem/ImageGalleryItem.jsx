import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onShow, tags }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => onShow(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  onShow: propTypes.func,
};

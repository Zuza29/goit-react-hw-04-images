import { useEffect } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

export const Modal = ({ image, onClose }) => {
 const handleClose = event => {
    if (event.code === 'Escape') {
      return onClose();
    }
  };

 useEffect(() => {
  window.addEventListener('keydown', handleClose);
  return () => { 
      window.removeEventListener('keydown', handleClose);
     }
  }, [])

  // useEffect(() => { function that will execute }, [ condition on which the function will execute ])

    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={image} alt="Result" />
        </div>
      </div>
    );
  
}

Modal.propTypes = {
  image: propTypes.string,
};

import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { URL } from 'constants';
import { Button } from './Button/Button';
import css from './Button/Button.module.css';
import 'index.css';
import { Notify } from 'notiflix';
import { Modal } from './Modal/Modal';
import { Spinner } from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onShow = url => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const onClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  const onSubmit = async userQuery => {
    let isRefetching = false;
    if (userQuery !== query) {
      setImages([]);
      setPage(1);
    } else {
      isRefetching = true;
    }

    setQuery(userQuery);
    setLoading(true);

    const response = await fetch(
      `${URL}q=${userQuery}&page=${page}&key=31646288-d6f5eefd60163767746b31051&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .catch(error => Notify.failure('Sorry, something went wrong...', error));

    if (response && response.hits.length > 0) {
      isRefetching
        ? setImages([...images, ...response.hits])
        : setImages([...response.hits]);
      setPage(page + 1);
      setLoading(false);
    } else {
      Notify.info('Sorry, there are no pictures matching your search');
      setImages([]);
    }
  };

  const loadMore = async event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Spinner />}
      <ImageGallery images={images} onShow={onShow} />

      {images.length > 0 && (
        <Button callback={loadMore} className={css.button} text={'true'} />
      )}
      {showModal && <Modal onClose={onClose} image={largeImageURL} />}
    </div>
  );
};

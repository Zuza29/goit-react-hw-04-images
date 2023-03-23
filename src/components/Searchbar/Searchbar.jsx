import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { Notify } from 'notiflix';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onHandleChange = event => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    if (value.trim() !== '') {
      onSubmit(value);
    } else {
      Notify.info('Please provide a query');
      return;
    }
  };

  return (
    <header className={css.searchbar}>
      <h1>Pixabay Image Finder</h1>
      <form className={css.searchForm} onSubmit={onHandleSubmit}>
        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search for..."
          value={value}
          onChange={onHandleChange}
        />
        <Button className={css.searchFormButton} text="false" type="submit" />
      </form>
    </header>
  );
};

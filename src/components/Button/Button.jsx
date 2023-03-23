import propTypes from 'prop-types';

export const Button = ({ callback, text, type, className }) => {
  return (
    <button className={className} type={type} onClick={callback}>
      {text === 'true' && 'Load more'}
    </button>
  );
};

Button.propTypes = {
  callback: propTypes.func,
  text: propTypes.string,
  type: propTypes.string,
  className: propTypes.string,
};

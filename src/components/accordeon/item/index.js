import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Item({
  title,
  size,
  color,
  text,
  setTitle,
  clearTitles,
  index,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    const activeTitle = { title, index };
    if(!isOpen) {
      setTitle(activeTitle);
    }
    if (isOpen) {
      clearTitles(activeTitle);
    }
  }

  return (
    <div className={`accordeon__item accordeon__item--${size}`}>
      <button
        type="button"
        className={`accordeon__toggle accordeon__toggle--${size} accordeon__toggle--${color}`}
        onClick={toggle}
      >
        {title}
        <i className={isOpen ? 'accordeon__icon accordeon__icon--opened' : 'accordeon__icon'} />
      </button>
      <div
        className={`
          accordeon__text
          accordeon__text--${size}
          ${isOpen ? 'accordeon__text--visible' : ''}
        `}
      >
        {text}
      </div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'orange', 'green', 'red']),
};

Item.defaultProps = {
  text: 'No description',
  color: 'primary',
};

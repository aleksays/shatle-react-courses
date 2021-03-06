import PropTypes from 'prop-types';
import Item from './item';
import './styles.css';

export default function Accordeon({
  list,
  title,
  size,
  color,
}) {

  return (
    <div className={`accordeon accordeon--${color} accordeon--${size}`}>
      <h4 className={`accordeon__title accordeon__title--${size}`}>
        {title}
      </h4>
      {list.map((listItem, index) => (
        <Item
          key={`listItem.title--${String(index)}`}
          title={listItem.title}
          size={size}
          color={color}
          text={listItem.text}
        />
      ))}
    </div>
  );
}

Accordeon.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'orange', 'green', 'red']),
};

Accordeon.defaultProps = {
  title: 'Accordeon',
  size: 'medium',
  color: 'primary',
};
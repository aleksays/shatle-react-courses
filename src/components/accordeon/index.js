import PropTypes from 'prop-types';
import Item from './item';
import useShowInfo from '../../hooks/useShowInfo';
import './styles.css';

export default function Accordeon({
  list,
  title,
  size,
  color,
}) {
  const {
    setTitle,
    clearTitles,
    activeTitle,
  } = useShowInfo();

  return (
    <div className={`accordeon accordeon--${color} accordeon--${size}`}>
      <h4 className={`accordeon__title accordeon__title--${size}`}>
        {title}
        </h4>
        {activeTitle.length > 0 && (
          <div className="active-item">
            <p>Active items: <strong>{activeTitle.map(item => item.title).join(', ')}</strong></p>
            <p>Indexes: <strong>{activeTitle.map(item => item.index + 1).join(', ')}</strong></p>
          </div>
        )}
      {list.map((listItem, index) => (
        <Item
          key={`listItem.title--${String(index)}`}
          title={listItem.title}
          index={index}
          setTitle={setTitle}
          clearTitles={clearTitles}
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
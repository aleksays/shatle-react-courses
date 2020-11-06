import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }

  render() {
    const {
      title,
      size,
      text,
      color,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={`accordeon__item accordeon__item--${size}`}>
        <button
          type="button"
          className={`accordeon__toggle accordeon__toggle--${size} accordeon__toggle--${color}`}
          onClick={this.toggle}
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
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'orange', 'green', 'red']),
};

Item.defaultProps = {
  text: 'No description',
  color: 'primary',
};

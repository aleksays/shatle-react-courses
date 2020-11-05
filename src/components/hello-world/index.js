import PropTypes from 'prop-types';
import './index.css';

function HelloWorld({ text }) {
    return (
        <h1>{text}</h1>
    );
}

export default HelloWorld;

HelloWorld.propTypes = {
    text: PropTypes.string,
};

HelloWorld.defaultProps = {
    text: 'Hello World',
};

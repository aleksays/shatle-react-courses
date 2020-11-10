import PropTypes from 'prop-types';
import './styles.css';

export default function Box({ children, title, gridCell }) {
    return (
        <div className="box" style={{ gridColumn: `${gridCell}` }}>
            <h4 className="box__title">{title}</h4>
            {children}
        </div>
    );
}

Box.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
    gridCell: PropTypes.string,
};

Box.defaultProps = {
    gridCell: '2/3'
};

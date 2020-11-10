import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            someState: null,
        }
    }

    render() {
        const { children, type, ...restProps } = this.props;
        return (
            <button {...restProps} type={type}>{children}</button>
        );
    }
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    type: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
};
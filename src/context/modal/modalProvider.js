import { useState } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import ModalContext from './modalContext';

const initialState = {
  component: null,
  props: {},
  onHide: noop,
};

export default function ModalProvider({ children }) {
  const [state, setState] = useState(initialState);

  function showModal(modalComponent, modalProps = {}, options = {}) {
    setState({
      component: modalComponent,
      props: modalProps,
      onHide: options.onHide || noop,
    });
  }

  function hideModal() {
    state.onHide();
    setState(initialState);
  }

  const values = {
    component: state.component,
    props: state.props,
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.array]),
};
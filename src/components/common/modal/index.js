import { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { CgClose } from 'react-icons/cg';
import ModalContext from '../../../context/modal/modalContext';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

export default function Modal({
  children,
  title,
  isClosable,
  size,
}) {
  const { hideModal } = useContext(ModalContext);
  const backdropRef = useRef();

  function outsideClick(e) {
    if (e.target === backdropRef.current && isClosable) {
      hideModal();
    }
  }

  function keyboardCloseListner(e) {
    if (e.key === 'Escape' && isClosable) {
      e.stopPropgation();
      hideModal();
    }
  }

  useEffect(() => {
    document.addEventListener('click', outsideClick);
    document.addEventListener('keydown', keyboardCloseListner);

    return () => {
      document.removeEventListener('click', outsideClick);
      document.removeEventListener('keydown', keyboardCloseListner);
    };
  });

  const modalStyles = cx({
    modal: true,
    small: size === 'small',
    medium: size === 'medium',
    large: size === 'large',
  });

  return (
    <div className={styles.backdrop} ref={backdropRef}>
      <div className={modalStyles}>
        <div className={styles.header}>
          <div className={styles.title}>
            {title}
          </div>
          <button
            type="button"
            className={styles.hideModal}
            onClick={hideModal}
          >
            <CgClose />
          </button>
        </div>

        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );

};

Modal.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  isClosable: PropTypes.bool,
};

Modal.defaultProps = {
  size: 'medium',
  isClosable: true,
};
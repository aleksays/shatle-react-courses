import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { CgClose } from 'react-icons/cg';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

export default function PortalModal({
  children,
  title,
  isClosable,
  onHide,
  size,
}) {
  const backdropRef = useRef();

  function outsideClick(e) {
    if (e.targer === backdropRef.current && isClosable) {
      onHide();
    }
  }

  function keyboardCloseListner(e) {
    if (e.key === 'Escape' && isClosable) {
      e.stopPropgation();
      onHide();
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
    <div className={styles.backdrop}>
      <div className={modalStyles}>
        <div className={styles.header}>
          <div className={styles.title}>
            {title}
          </div>
          <button
            type="button"
            className={styles.hideModal}
            onClick={onHide}
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

PortalModal.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  isClosable: PropTypes.bool,
  onHide: PropTypes.func,
};

PortalModal.defaultProps = {
  size: 'medium',
  isClosable: true,
  onHide: () => {},
};
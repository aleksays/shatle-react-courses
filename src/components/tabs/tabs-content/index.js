import { useRef } from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import useTabs from '../../../hooks/useTabs';
import styles from './styles.module.css';

export default function TabsContent({ item }) {
  const { activePanel } = useTabs();
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={activePanel === item.title}
      timeout={500}
      classNames={{
        enter: styles["contentEnter"],
        enterActive: styles["contentEnterActive"],
        exit: styles["contentExit"],
        exitActive: styles["contentExitActive"],
      }}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
    >
      <p ref={nodeRef} className={styles.content}>{item.content}</p>
    </CSSTransition>
  );
};

TabsContent.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

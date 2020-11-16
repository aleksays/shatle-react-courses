import useTabs from '../../../hooks/useTabs';
import classnames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

export default function TabsNavItem({ title }) {
  const { activePanel, switchPanel } = useTabs();
  const btnStyles = cx({
    btn: true,
    'btn-active': title === activePanel,
  });

  return (
    <li className={styles.item}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => switchPanel(title)}
      >
        {title}
      </button>
    </li>
  );
};
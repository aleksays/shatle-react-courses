import { useEffect } from 'react';
import useTabs from '../../../hooks/useTabs';
import TabNavItem from './tabs-nav-item';
import styles from './styles.module.css';

export default function TabsNav({ items }) {
  const { setDefaultPanel } = useTabs();

  useEffect(() => {
    setDefaultPanel(items[0]);
  }, [setDefaultPanel, items]);

  return (
    <ul className={styles.nav}>
      {items.map((item, index) => (
        <TabNavItem key={`${item}--${String(index)}`} title={item.title} />
      ))}
    </ul>
  );
}
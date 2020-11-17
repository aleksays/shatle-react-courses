import { useContext } from 'react';
import TabContext from '../context/tabs/tabsContext';

const useTabs = () => useContext(TabContext);

export default useTabs;
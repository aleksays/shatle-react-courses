import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TabContext from './tabsContext';

export default function TabsProvider({ children }) {
  const [defaultPanel, setDefaultPanel] = useState('');
  let state = {
    activePanel: defaultPanel,
    switchPanel: (newPanel) => {
      setDefaultPanel(newPanel);
      localStorage.setItem('activePanel', newPanel);
    },
    setDefaultPanel,
  };

  useEffect(() => {
    const storagedPanel = localStorage.getItem('activePanel');
    setDefaultPanel(storagedPanel || '')
  }, []);

  return (
    <TabContext.Provider value={state}>
      {children}
    </TabContext.Provider>
  );
}

TabsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
};

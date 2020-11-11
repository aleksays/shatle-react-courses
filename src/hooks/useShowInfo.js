import { useState, useCallback } from 'react';

export default function useShowInfo() {
  const [activeTitle, setActiveTitle] = useState([]);

  const setTitle = useCallback((title) => {
      setActiveTitle([...activeTitle, title]);
  }, [activeTitle]);
  
  const clearTitles = useCallback((title) => {
    setActiveTitle((prevState) => prevState.filter(item => item.index !== title.index));
  }, []);

  return {
    activeTitle,
    setTitle,
    clearTitles,
  };
}
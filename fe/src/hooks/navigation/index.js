import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashNavigation = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash]);
};
export default useHashNavigation;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashNavigation = () => {
  const { hash } = useLocation();

  useEffect(() => {
    console.log(hash);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView();
    } else {
      const title = document.getElementById('pocetak');
      title.scrollIntoView();
    }
  }, [hash]);
};
export default useHashNavigation;

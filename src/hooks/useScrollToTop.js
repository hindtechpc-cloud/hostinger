import { useEffect } from 'react';

const useScrollToTop = (dependencies = []) => {
  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, dependencies);
};

export default useScrollToTop;
import { useEffect, useState } from 'react';

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Sayfa yüklendiğinde ve scroll değiştiğinde scroll değerini güncelle
    window.addEventListener('scroll', handleScroll);

    // Component unmount olduğunda event listener'ı temizle
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}

export default useScrollPosition;

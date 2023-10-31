import cn from 'classnames';
import styles from './style.module.css';
import Nav from '../nav';
import Footer from '../footer';
import { useEffect, useRef, useState } from 'react';
import SmoothScroll from '../smoothScroll';
const Layout = ({ children }) => {
  const [padding, setPadding] = useState(0);
  const footerRef = useRef(null);
  useEffect(() => {
    if (footerRef.current) {
      setPadding(footerRef.current?.scrollHeight);
    }
  }, []);
  return (
    <>
      <SmoothScroll>
        <Nav />
        <main style={{ paddingBottom: padding }} className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
      </SmoothScroll>
      <Footer ref={footerRef} />
    </>
  );
};
export default Layout;

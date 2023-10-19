import cn from 'classnames';
import styles from './style.module.css';
import Image from 'next/image';
import useScrollPosition from '@/hooks/useScrollPosition';
import Button from '../elements/button';
import MenuButton from '../elements/menuButton';
const Nav = () => {
  const scroll = useScrollPosition();
  return (
    <nav className={cn(styles.nav, scroll > 5 && styles.scroll)}>
      <div className="container">
        <div className={styles.content}>
          <Image src="/logo-white.png" className={styles.logo} height="30" width="189" />
          <div className={styles.buttonBox}>
            <Button>Request a demo</Button>
            <MenuButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

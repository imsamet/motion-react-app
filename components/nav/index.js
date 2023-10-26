import cn from 'classnames';
import styles from './style.module.css';
import Image from 'next/image';
import useScrollPosition from '@/hooks/useScrollPosition';
import Button from '../elements/button';
import MenuButton from '../elements/menuButton';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  const scroll = useScrollPosition();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const toggle = e => {
    e.stopPropagation();
    setOpenMenu(prev => !prev);
  };
  const isOtherPage = router.pathname !== '/';
  const items = [
    {
      label: 'Homepage',
      href: '/',
      subItem: [
        { label: 'How it work', href: '#' },
        { label: 'Benefits', href: '#' },
        { label: 'Complete solution', href: '#' },
        { label: 'About us', href: '#' },
        { label: 'NeoInsurance Marketplace', href: '#' },
        { label: 'How to join', href: '#' },
      ],
    },
    { label: 'Market Insights', href: '#' },
    { label: 'Get in touch', href: 'contact-us' },
  ];
  return (
    <nav
      className={cn(
        styles.nav,
        scroll > 5 && styles.scroll,
        isOpenMenu && styles.close,
        isOtherPage && styles.otherPage,
      )}
    >
      <div className="container">
        <div className={cn(styles.content, isOpenMenu && styles.close)}>
          <Image src="/logo-white.png" className={styles.logo} height="30" width="189" />
          <div className={styles.buttonBox}>
            <Button
              color={isOtherPage ? 'black' : 'white'}
              size="medium"
              variant="bordered"
              className={styles.contactButton}
            >
              Request a demo
            </Button>
            <MenuButton onClick={toggle} />
          </div>
        </div>
      </div>
      <div onClick={toggle} className={cn(styles.hamburberMenu, isOpenMenu && styles.open)}>
        <div onClick={e => e.stopPropagation()} className={styles.menuContent}>
          <div>
            <ul className={styles.list}>
              {items?.map((i, key) => (
                <li key={key} className={styles.item}>
                  <Link className={cn(styles.link, router.pathname === i?.href && styles.active)} href={i?.href}>
                    {i?.label}
                  </Link>
                  {i?.subItem && (
                    <>
                      <ul className={styles.subList}>
                        {i?.subItem?.map((s, sKey) => (
                          <li key={sKey} className={styles.subItem}>
                            <Link
                              className={cn(styles.link, styles.subLink, router.asPath === s?.href && styles.active)}
                              href={s?.href}
                            >
                              {s?.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <Button size="large" variant="colored" className={cn(styles.contactButton, styles.hamburgerContactButton)}>
              Request a demo
            </Button>
          </div>
          <div>
            <MenuButton type="close" onClick={toggle} className={styles.close} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

import cn from 'classnames';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../icons/icons';
import Text from '../elements/texts/text';
const Footer = forwardRef(({}, ref) => {
  const router = useRouter();
  return (
    <footer className={styles.footer} ref={ref}>
      <div className={styles.content}>
        <div className="container">
          <div className="row between">
            <div className="col-12">
              <span className={styles.topButton}>
                <Icons name="left" />
              </span>
            </div>
            <div className="col-12 flex justify-center">
              <Link href="#">
                <Image className={styles.logo} src="/logo-only-icon.png" height="70" width="84" />
              </Link>
            </div>
            <div className="col-auto">
              <Text color="grey" size="sm">
                © 2022 DiscoverMarket Asia Pte. Ltd.
              </Text>
            </div>
            <div className="col-auto flex gap-x-5">
              <Link href="#">
                <Text color="grey" size="sm">
                  Privacy Policy
                </Text>
              </Link>
              <Link href="#">
                <Text color="grey" size="sm">
                  Terms of Service
                </Text>
              </Link>
              <Link href="#">
                <Text color="grey" size="sm">
                  Internet Security Advisory
                </Text>
              </Link>
              <Link href="#">
                <Text color="grey" size="sm">
                  Disclaimer
                </Text>
              </Link>
            </div>
            <div className="col-auto">
              <Text color="grey" size="sm" className="flex items-center gap-x-2">
                Site by Vide Infra <Icons name="vi-logo" size="16" />
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
export default Footer;

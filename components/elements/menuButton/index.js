import Icons from '@/components/icons/icons';
import styles from './style.module.css';
import cn from 'classnames';
const MenuButton = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.menu, className)} {...props}>
      <Icons width="60" height="60" className={styles.icon} name="Menu" />
    </button>
  );
};
export default MenuButton;

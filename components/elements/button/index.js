import Icons from '@/components/icons/icons';
import styles from './style.module.css';
import cn from 'classnames';
const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      <span className={styles.text}>{children}</span>
      <Icons className={styles.icon} name="Left" />
    </button>
  );
};
export default Button;

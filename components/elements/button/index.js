import PropTypes from 'prop-types';
import Icons from '@/components/icons/icons';
import styles from './style.module.css';
import cn from 'classnames';
const Button = ({ variant, size, children, className, ...props }) => {
  return (
    <button className={cn(styles.button, styles?.[size], styles?.[variant], className)} {...props}>
      <span className={styles.text}>{children}</span>
      <Icons className={styles.icon} name="Left" />
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.oneOf('medium', 'large'),
  variant: PropTypes.oneOf('bordered', 'colored'),
};
Button.defaultProps = {
  size: 'medium',
  variant: 'bordered',
};
export default Button;

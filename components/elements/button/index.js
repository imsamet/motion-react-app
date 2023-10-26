import PropTypes from 'prop-types';
import Icons from '@/components/icons/icons';
import styles from './style.module.css';
import cn from 'classnames';
const Button = ({ color, variant, size, children, className, ...props }) => {
  return (
    <button className={cn(styles.button, styles?.[size], styles?.[variant], styles?.[color], className)} {...props}>
      <span className={styles.text}>{children}</span>
      <Icons className={styles.icon} name="left" />
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  variant: PropTypes.oneOf(['bordered', 'colored']),
  color: PropTypes.oneOf(['white', 'black']),
};
Button.defaultProps = {
  size: 'medium',
  variant: 'bordered',
  color: 'white',
};
export default Button;

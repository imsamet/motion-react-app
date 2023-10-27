import PropTypes from 'prop-types';
import Icons from '@/components/icons/icons';
import styles from './style.module.css';
import cn from 'classnames';
import Text from '../texts/text';
const Button = ({ color, variant, size, isGradiend, children, className, ...props }) => {
  return (
    <button
      className={cn(
        styles.button,
        styles?.[size],
        styles?.[variant],
        styles?.[color],
        isGradiend && styles.gradiend,
        className,
      )}
      {...props}
    >
      <Text
        tag="span"
        size={size === 'medium' ? 'sm' : size === 'large' && '2xl'}
        color={color}
        className={styles.text}
      >
        {children}
      </Text>
      <Icons className={styles.icon} name="left" />
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  variant: PropTypes.oneOf(['bordered', 'colored']),
  color: PropTypes.oneOf(['white', 'black']),
  isGradiend: PropTypes.bool,
};
Button.defaultProps = {
  size: 'medium',
  variant: 'bordered',
  color: 'white',
};
export default Button;

import PropTypes from 'prop-types';
import Icons from '@/components/icons/icons';
import styles from './style.module.css';
import cn from 'classnames';
const MenuButton = ({ type, children, className, ...props }) => {
  return (
    <button className={cn(styles.menu, className)} {...props}>
      <Icons width="60" height="60" className={styles.icon} name={type} />
    </button>
  );
};
MenuButton.propTypes = {
  type: PropTypes.oneOf(['menu', 'close']),
};
MenuButton.defaultProps = {
  type: 'menu',
};
export default MenuButton;

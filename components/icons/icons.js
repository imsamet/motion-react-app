import { Close, Left, Menu } from './index.js';

const Icons = ({ name, ...props }) => {
  switch (name) {
    case 'left':
      return <Left {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'close':
      return <Close {...props} />;
  }
};
export default Icons;

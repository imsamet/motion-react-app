import { Left, Menu } from './index.js';

const Icons = ({ name, ...props }) => {
  switch (name) {
    case 'Left':
      return <Left {...props} />;
    case 'Menu':
      return <Menu {...props} />;
  }
};
export default Icons;

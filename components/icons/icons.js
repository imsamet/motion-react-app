import { Close, Left, Menu, ViLogo } from './index.js';

const Icons = ({ name, ...props }) => {
  switch (name) {
    case 'left':
      return <Left {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'close':
      return <Close {...props} />;
    case 'vi-logo':
      return <ViLogo {...props} />;
  }
};
export default Icons;

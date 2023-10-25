import cn from 'classnames';
import styles from './style.module.css';
const FormHero = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className={cn('col-12 col-xs-8', styles.red)}>col-8</div>
          <div className="col-12 col-xs-4">col-4</div>
        </div>
      </div>
    </header>
  );
};
export default FormHero;

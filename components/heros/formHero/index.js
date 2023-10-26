import cn from 'classnames';
import styles from './style.module.css';
import Heading from '@/components/elements/texts/heading';
import ContactUs from '@/components/forms/contactUs';
const FormHero = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-8">
            <span className={styles.heading}>Connect with us</span>
            <Heading colored="Discover" className={styles.title} type="h1">
              Discover our open insurance platform today!
            </Heading>
          </div>
          <div className="col-12 col-xs-4">
            <ContactUs />
          </div>
        </div>
      </div>
    </header>
  );
};
export default FormHero;

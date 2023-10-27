import cn from 'classnames';
import styles from './style.module.css';
import Heading from '@/components/elements/texts/heading';
import ContactUs from '@/components/forms/contactUs';
import Text from '@/components/elements/texts/text';
const FormHero = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-12 col-md-6 col-lg-4 col-xl-4">
            <Text tag={'span'} color="black" weight="medium" size="lg">
              Connect with us
            </Text>
            <Heading colored="Discover" className={styles.title} type="h1">
              Discover our open insurance platform today!
            </Heading>
          </div>
          <div className="col-12 col-xs-12 col-md-6 col-lg-8 col-xl-7 offset-xl-1 col-2xl-6 offset-2xl-2">
            <ContactUs />
          </div>
        </div>
      </div>
    </header>
  );
};
export default FormHero;

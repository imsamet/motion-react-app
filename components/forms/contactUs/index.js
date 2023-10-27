import cn from 'classnames';
import styles from './styles.module.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Input from '@/components/elements/input';
import Select from '@/components/elements/select';
import Button from '@/components/elements/button';
import Text from '@/components/elements/texts/text';
const ContactUs = ({}) => {
  let contactUsValidation = yup.object().shape({
    name: yup.string().required('This field is required.'),
    email: yup.string().email('Enter a valid email').required('This field is required.'),
    type: yup.string().required('This field is required.'),
  });
  const contactUs = useFormik({
    //enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      type: null,
    },
    validationSchema: contactUsValidation,
    onSubmit: async values => {
      console.log(values);
    },
  });
  const typeOptions = [
    { value: 'b2b-partner', label: 'B2B Partner' },
    { value: 'individual', label: 'Individual' },
    { value: 'insurer-reinsurer', label: 'Insurer / Reinsurer' },
    { value: 'other', label: 'Other' },
  ];
  return (
    <form className={styles.form}>
      <Input
        label="Name"
        name="name"
        value={contactUs.values.name}
        onChange={contactUs.handleChange}
        error={contactUs.touched.name && contactUs.errors.name}
        errorMessage={contactUs.errors.name}
        touched={contactUs.touched.name}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={contactUs.values.email}
        onChange={contactUs.handleChange}
        error={contactUs.touched.email && contactUs.errors.email}
        errorMessage={contactUs.errors.email}
        touched={contactUs.touched.email}
      />
      <Select
        label="Your Business Type"
        name="type"
        options={typeOptions}
        value={contactUs.values.type}
        onChange={contactUs.handleChange}
        error={contactUs.touched.type && contactUs.errors.type}
        errorMessage={contactUs.errors.type}
        touched={contactUs.touched.type}
      />
      <div className="row between">
        <div className="col-md-12 col-lg-6">
          <Text size="xs" color="grey" tag="label">
            By clicking the button, you agree to discovermarket <a href="#">Terms of Use</a> and{' '}
            <a href="#">Privacy Policy</a>
          </Text>
        </div>
        <div className="col-md-12 col-lg-auto">
          <Button size="large" variant="colored">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
export default ContactUs;

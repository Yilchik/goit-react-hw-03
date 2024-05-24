import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min 3").max(50, "max 50").required("required"),
  number: Yup.string().min(3, "Min 3").max(50, "max 50").required("required"),
});

const ContactForm = ({ submit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {
        submit(values);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.myInput}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="number"
          name="number"
          id={numberFieldId}
          className={css.myInput}
        />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

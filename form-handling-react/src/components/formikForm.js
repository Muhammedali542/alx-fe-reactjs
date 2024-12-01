import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const FormikForm = () => {
  <Formik
    initialValues={{ name: "", email: "" }}
    validationSchema={userSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {() => {
      <form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <button type="submit">Submit</button>
      </form>;
    }}
  </Formik>;
};

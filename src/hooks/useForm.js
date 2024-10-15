import { useState } from "react";

const useForm = (formFields) => {
  const [values, setValues] = useState(formFields);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(values);
    if (Object.keys(formErrors).length === 0) {
      alert("Email sent");
      setErrors("");
      setValues(formFields);
    } else {
      setErrors(formErrors);
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
};

export default useForm;

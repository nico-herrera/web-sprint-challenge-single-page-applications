import React, { useState, useEffect } from "react";
import { formSchema } from "../Validations/userValidations";
import * as Yup from "yup";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      console.log("valid", valid);
      setIsButtonDisabled(!valid);
    });
  }, [form]);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  const changeHandler = (event) => {
    event.persist();
    const newForm = { ...form, [event.target.name]: event.target.value };
    validateChange(event);
    setForm(newForm);
  };

  const validateChange = (event) => {
    Yup.reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({ ...errors, [event.target.name]: "" });
      })
      .catch((err) =>
        setErrors({ ...errors, [event.target.name]: err.errors[0] })
      );
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={changeHandler}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        <label htmlFor="pizzaSizes"></label>
        <select id="pizzaSizes" name="pizzaSizes">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button disabled={isButtonDisabled} type="submit">
          Add to Order
        </button>
      </form>
    </div>
  );
};

export default Form;

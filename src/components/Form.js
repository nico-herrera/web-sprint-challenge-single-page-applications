import React, { useState, useEffect } from "react";
import axios from "axios";
import { formSchema } from "../Validations/userValidations";
import * as Yup from "yup";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    pizzaSizes: "",
    mushrooms: "",
    bellPeppers: "",
    tofu: "",
    olives: "",
    instructions: "",
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

  const formSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");
    const postData = async () => {
      try {
        const resp = await axios.post("https://reqres.in/api/users", form);
        // window.location = "/retrieve";
        // setErrors(null);
        console.log(form);
        console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    postData();
  };

  const changeHandler = (event) => {
    event.persist();
    const newForm = { ...form, [event.target.name]: event.target.value };
    console.log(newForm);
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
        <br />
        <label htmlFor="pizzaSizes"></label>
        <select
          id="pizzaSizes"
          name="pizzaSizes"
          value={form.pizzaSizes}
          onChange={changeHandler}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <br />
        <div className="toppings">
          <label htmlFor="mushrooms">
            <input
              type="checkbox"
              id="mushrooms"
              name="mushrooms"
              onChange={changeHandler}
              checked={form.mushrooms}
            />
            Mushrooms
          </label>
          <label htmlFor="bellPeppers">
            <input
              type="checkbox"
              id="bellPeppers"
              name="bellPeppers"
              onChange={changeHandler}
              checked={form.bellPeppers}
            />
            Bell Peppers
          </label>
          <label htmlFor="tofu">
            <input
              type="checkbox"
              id="tofu"
              name="tofu"
              onChange={changeHandler}
              checked={form.tofu}
            />
            Tofu
          </label>
          <label htmlFor="olives">
            <input
              type="checkbox"
              id="olives"
              name="olives"
              onChange={changeHandler}
              checked={form.olives}
            />
            Olives
          </label>
        </div>
        <label htmlFor="specialInstructions"></label>
        <textarea
          type="text"
          id="specialInstructions"
          name="instructions"
          value={form.instructions}
          onChange={changeHandler}
        />
        <br />

        <button
          disabled={isButtonDisabled}
          type="submit"
          data-cy="order-button"
        >
          Add to Order
        </button>
      </form>
    </div>
  );
};

export default Form;

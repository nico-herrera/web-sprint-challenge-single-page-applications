import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must fill out name")
    .required("Name is a required field")
    .min(2),
  pizzaSizes: Yup.string(),
  mushrooms: Yup.string(),
  bellPeppers: Yup.string(),
  tofu: Yup.string(),
  olives: Yup.string(),
  instructions: Yup.string(),
});

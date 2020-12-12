import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must fill out name")
    .required("Name is a required field")
    .min(2),
});

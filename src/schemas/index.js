import * as yup from "yup";

// Regex for minimum five characters, at least one letter and one number:
const passwordRules = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{5,}$";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});

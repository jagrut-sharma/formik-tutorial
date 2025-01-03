import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  // Don't forget to pass props in useField
  const [field, meta] = useField(props);

  // field gives all of the values that hava been entered and the functions whereas the meta gives the touched and errors

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};
export default CustomInput;

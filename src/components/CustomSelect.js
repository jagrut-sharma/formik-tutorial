import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...props}
        {...field}
        className={meta.error && meta.touched ? "input-error" : ""}
      ></select>
    </>
  );
};
export default CustomSelect;

import styles from "./SelectFild.module.css";
export const SelectFild = ({
  initialOption,
  defaultValue,
  onChange,
  block,
}) => {
  return (
    <select
      className={block ? styles.teacherSelect : styles.teacherSelectDisabled}
      defaultValue={defaultValue}
      disabled={!block}
      onChange={onChange}
    >
      <option>Вакансия</option>;
      {initialOption.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

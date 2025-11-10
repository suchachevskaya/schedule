import styles from "../../SubjectCard.module.css";

export const StudentsNumber = ({ podgroups, onChange }) => {
  return (
    <tr className={styles.activityRow}>
      <td className={styles.activityLabel}>Количество человек</td>
      <td></td>
      {podgroups.map((pg, index) => (
        <td key={index} className={styles.activityTeacherCell}>
          <input
            type="text"
            value={pg.countStudents ?? ""}
            onChange={(e) => onChange(index, e.target.value)}
          />
        </td>
      ))}
    </tr>
  );
};

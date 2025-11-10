import styles from "../../SubjectCard.module.css";
export const AdditionalInfo = ({onChange, colSpan, value}) => {
  return (
    <tr className={styles.activityRow}>
      <td className={styles.activityLabel}>
        Примечание (для составления расписания)
      </td>
      <td></td>
      <td colSpan={colSpan}>
        <textarea
          className={styles.additionalInfo}
          value={value}
          onChange={onChange}
        />
      </td>
    </tr>
  );
};

import { activities, teacherKeys } from "../../../constants/type";
import styles from "../../SubjectCard.module.css";
import { SelectFild } from "../SelectFild/SelectFild";
import { AdditionalInfo } from "./AdditionalInfo";

import { StudentsNumber } from "./StudentsNumber";
export const TableBody = ({
  subject,
  podgroups,
  teachers,
  initialOption,
  updatePodgroupField,
  additionalInfo,
  handleAdditionalChange,
  handleUpdateStudentCount,
}) => {
  const filterdDataRus = Object.entries(activities).filter(
    ([key]) => subject[key]
  );
  return (
    <>
      {filterdDataRus.map(([key, label]) => {
        if (key === "additionalInfo" || key === "studentsNumber") return null;
        const teacherKey = teacherKeys[key];

        return (
          <tr className={styles.activityRow} key={key}>
            <td className={styles.activityLabel}>{label}</td>
            <td className={styles.activityHours}>{subject[key]}</td>
            {podgroups.map((pg, index) => {
              const teacherId = pg[teacherKey];
              const teacher = teachers.find((t) => t.id === teacherId);
              const teacherName = teacher ? teacher.name : "Вакансия";
              const blockInput = subject[key] > 0;

              return (
                <td key={index} className={styles.activityTeacherCell}>
                  <SelectFild
                    initialOption={initialOption}
                    defaultValue={teacherName}
                    block={blockInput}
                    onChange={(e) =>
                      updatePodgroupField(index, teacherKey, e.target.value)
                    }
                  />
                </td>
              );
            })}
          </tr>
        );
      })}

      {subject.studentsNumber !== undefined && podgroups.length > 1 && (
        <StudentsNumber
          podgroups={podgroups}
          subject={subject}
          onChange={(index, value) => handleUpdateStudentCount(index, value)}
        />
      )}

      {subject.additionalInfo !== undefined && (
        <AdditionalInfo
          colSpan={Math.max(1, podgroups.length)}
          updatePodgroupField={updatePodgroupField}
          value={additionalInfo}
          onChange={(e) => handleAdditionalChange(e.target.value)}
        />
      )}
    </>
  );
};

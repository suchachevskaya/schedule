import React, { useState } from "react";
import styles from "./SubjectCard.module.css";
import {  header } from "../constants/type";
import { TableBody } from "./ui/Row/TableBody";
import { TableHeader } from "./ui/Row/TableHeader";

export const SubjectCard = ({ subject, teachers, initialOption, onUpdate }) => {
  const [podgroups, setPodgroups] = useState(subject.podgroups || []);

  const [additionalInfo, setAdditionalInfo] = useState(
    subject.additionalInfo || ""
  );

  const createNewGroup = () => {
    const newPodgroup = {
      countStudents: "",
      lectureTeacher: "",
      laboratoryTeacher: "",
      practiceTeacher: "",
      seminarTeacher: "",
      examTeacher: "",
      offsetTeacher: "",
    };
    setPodgroups((prev) => {
      const next = [...prev, newPodgroup];
      if (typeof onUpdate === "function") {
        onUpdate({ ...subject, podgroups: next, additionalInfo });
      }
      return next;
    });
  };

  const deleteNewGroup = () => {
    setPodgroups((prev) => {
      const next = prev.length > 1 ? prev.slice(0, prev.length - 1) : prev;
      if (typeof onUpdate === "function") {
        onUpdate({ ...subject, podgroups: next, additionalInfo });
      }
      return next;
    });
  };

  const updatePodgroupField = (index, field, value) => {
    setPodgroups((prev) => {
      const next = prev.map((p, i) =>
        i === index ? { ...p, [field]: value } : p
      );
      if (typeof onUpdate === "function") {
        onUpdate({ ...subject, podgroups: next, additionalInfo });
      }
      return next;
    });
  };

  const handleAdditionalChange = (value) => {
    setAdditionalInfo(value);
    if (typeof onUpdate === "function") {
      onUpdate({ ...subject, podgroups, additionalInfo: value });
    }
  };
  const handleUpdateStudentCount = (index, value) => {
    setPodgroups((prev) => {
      const next = prev.map((p, i) =>
        i === index ? { ...p, countStudents: value } : p
      );
      if (typeof onUpdate === "function") {
        onUpdate({ ...subject, podgroups: next, additionalInfo });
      }
      return next;
    });
  };

  return (
    <section className={styles.tableWrapper}>
      <header className={styles.subjectName}>{subject.subjectName}</header>

      <table className={styles.headerWrapper}>
        <tbody>
          <tr className={styles.infoRow}>
            {Object.entries(header).map(([key, label]) => (
              <React.Fragment key={key}>
                <th className={styles.infoLabel}>{label}</th>
                <td className={styles.infoValue}>{subject[key]}</td>
              </React.Fragment>
            ))}
          </tr>
        </tbody>
      </table>

      <table className={styles.infoWrapper}>
        <thead className={styles.bodyWrapper}>
          <TableHeader
            podgroups={podgroups}
            deleteNewGroup={deleteNewGroup}
            createNewGroup={createNewGroup}
          />
        </thead>

        <tbody>
          <TableBody
            subject={subject}
            podgroups={podgroups}
            teachers={teachers}
            initialOption={initialOption}
            additionalInfo={additionalInfo}
            updatePodgroupField={updatePodgroupField}
            handleAdditionalChange={handleAdditionalChange}
            handleUpdateStudentCount={handleUpdateStudentCount}
          />
        </tbody>
      </table>
    </section>
  );
};

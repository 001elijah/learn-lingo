import React from "react";
import s from "./TeachersList.module.scss";
import { teachers } from "../../services/teachers";

const TeachersList = () => {
  return (
    <ul>
      {teachers.map((teacher, index) => (
        <li key={index} className={s.teacherCard}>
          <span>{teacher.name}</span> <span>{teacher.surname}</span>
        </li>
      ))}
    </ul>
  );
};

export default TeachersList;

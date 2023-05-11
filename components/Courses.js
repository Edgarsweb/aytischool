import React from 'react'
import styles from "@/styles/Home.module.css";
import courses from "@/styles/Courses.module.css";

function Courses() {
  return (
    <div className={courses.container}>
      <div className={courses.filter}>Filter</div>
      <div>Courses</div>
    </div>
  )
}

export default Courses

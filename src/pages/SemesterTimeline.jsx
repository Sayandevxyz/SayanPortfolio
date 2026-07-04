import React from "react";
import "./SemesterTimeline.css";

const SemesterTimeline = () => {
  const semesters = [
    "1st Semester (Done)✅",
    "2nd Semester (Done)✅",
    "3rd Semester (Ongoing)",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester",
  ];

  return (
    <section className="semester-section">
      <h2 className="semester-title">Academic Journey</h2>

      <div className="semester-container">
        {semesters.map((sem, index) => (
          <div
            key={index}
            className="semester-card"
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            {sem}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SemesterTimeline;

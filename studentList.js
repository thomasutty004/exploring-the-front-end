import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

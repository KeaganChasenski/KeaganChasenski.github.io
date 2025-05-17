import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

// For sorting courses alphabetically
/* const getRows = (courses) => courses
  .sort((a, b) => {
    let ret = 0;
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (a.number > b.number) ret = 1;
    else if (a.number < b.number) ret = -1;
    return ret;
  }) */

const getRows = (courses) => courses
  .map((course, idx) => (
    <Course
      data={course}
      key={course.title}
      last={idx === courses.length - 1}
    />
  ));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
      <article className="resume-link">
        <p>
          <a href="https://uct.ac.za/sites/default/files/media/documents/uct-handbook-07a-2025-faculty-of-engineering-and-the-built-environment-ug.pdf">The UCT EBE Undergraduate handbook for course information</a>
        </p>
      </article>
    </div>
    <ul className="course-list">{getRows(data)}</ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;

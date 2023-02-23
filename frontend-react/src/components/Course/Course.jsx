import React from "react";
import Ripples from "react-ripples";
import "./Course.css";
import Courseimg from "../../Assets/courseimg.svg";
const Course = () => {
  const data = [
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
    },
  ];
  return (
    <div className="course-container">
      <div className="course-cards">
        {data.map((course) => (
          <div className="course-content">
            <img src={course.courseimg} alt="" />
            <div className="course-matter">
              <h1>{course.coursename}</h1>
              <p>{course.subject}</p>
              <h1>$ {course.price}</h1>
              <h5>
                Time : {course.start_time}-{course.end_time}
              </h5>
              <h5>CourseDelivery : {course.coursedelivery}</h5>
              <h5>Funding : {course.funding}</h5>
            </div>
            <div className="course-button">
              <Ripples>
                <button type="button" className="course-btn">
                  Register
                </button>
              </Ripples>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
  },
];

const FreeCourse = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const displayedCourses = showAllCourses
    ? freeCourseData
    : freeCourseData.slice(0, 4);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Programming Languages</h2>
          </Col>

          {displayedCourses.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
        {!showAllCourses && (
          <div className="text-center">
            <button className="btn" onClick={() => setShowAllCourses(true)}>
              See All
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};
export default FreeCourse;

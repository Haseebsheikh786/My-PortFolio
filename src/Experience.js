import React from "react";
import classes from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={classes.about}>
      <div
        className={`${classes.description} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        <div>
          <h1
            className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            Work Experience
          </h1>
        </div>
        <div
          className={`${classes.container} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
        >
          <div
            className={`${classes.item} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            <h2
              className={`${classes.subTitle} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              NEXTPAK AGILE SOLUTIONS
            </h2>
            <h4
              className={`${classes.experience} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              MERN Stack Developer (4 months)
            </h4>
            <p
              className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              During my time at nextPak Agile Solutions, I delved deep into the
              realm of MERN stack development, contributing significantly to the
              creation of innovative web solutions. Working alongside a
              dedicated team, I utilized MongoDB, Express.js, React.js, and
              Node.js to design intuitive interfaces, robust APIs, and efficient
              database structures. Rigorous testing and optimization ensured our
              applications performed exceptionally across various platforms.
              This experience molded me into a skilled MERN Stack Developer,
              primed to thrive in the ever-evolving digital landscape.
            </p>
          </div>
          <div
            className={`${classes.item} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            <h2
              className={`${classes.subTitle} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              SOFT FLEET
            </h2>
            <h4
              className={`${classes.experience} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              VUE JS Developer (7 months)
            </h4>
            <p
              className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}
            >
              During my tenure at  Soft Fleet as a
              Vue.js Developer, I specialized in front-end development,
              collaborating closely with backend developers using Laravel and
              MySQL, as well as with designers to create captivating user
              interfaces. I also led projects where I developed both the
              front-end with Vue.js and the backend with Node.js and MongoDB.
              This hands-on experience allowed me to refine my skills in Vue.js
              development, ensuring seamless user experiences while working
              within multidisciplinary teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

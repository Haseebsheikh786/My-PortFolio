import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={classes.about}>
      <div
        className={`${classes.img} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      ></div>
      <div
        className={`${classes.description} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
      >
        <div>
          <h1
            className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            About Me{" "}
          </h1>
        </div>
        <div>
          <p
            className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}
          >
            Eager and committed MERN Stack Developer with a solid grasp of both
            front-end and back-end technologies. Adept at developing responsive
            web applications, my enthusiasm lies in embracing new technologies
            to catalyze innovation. I've honed my skills through practical
            experiences, ensuring a comprehensive understanding of the
            intricacies involved in crafting robust software solutions. I
            believe in the power of continuous learning and thrive on staying
            updated with the latest trends in the dynamic world of web
            development. Let's create cutting-edge solutions together!
          </p>
        </div>
      </div>
    </section>
  );
}

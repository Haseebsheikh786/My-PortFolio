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
            Passionate and dedicated Full Stack Developer with one year of
            industry experience. Proficient in front-end and back-end
            technologies, including Firebase integration. Experienced in
            developing responsive web applications, I'm committed to leveraging
            the latest technologies to drive innovation. My skills have been
            honed through hands-on projects, providing a comprehensive
            understanding of building robust software solutions. I prioritize
            continuous learning, staying abreast of the latest trends in web
            development. Let's collaborate to create cutting-edge solutions
            together!
          </p>
        </div>
      </div>
    </section>
  );
}

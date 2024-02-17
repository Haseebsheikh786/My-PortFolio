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
            Enthusiastic and committed MERN Stack Developer with six months of
            industry experience, proficient in both front-end and back-end
            technologies. Skilled in developing responsive web applications, I
            am passionate about incorporating new technologies to foster
            innovation. My expertise has been refined through hands-on
            experiences, ensuring a holistic understanding of the complexities
            inherent in building robust software solutions. I believe in the
            importance of continuous learning and thrive on staying updated with
            the latest trends in the dynamic field of web development. Let's
            collaborate to craft cutting-edge solutions together!
          </p>
        </div>
      </div>
    </section>
  );
}

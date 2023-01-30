import React from "react";
import Introduction from "./Introduction";
import ProjectsPreview from "./ProjectsPreview";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <div>
      <Introduction />
      <section
        onClick={() => window.location.replace("/#section3")}
        style={{ backgroundColor: "blue", height: "100vh" }}
        id="section2"
      >
        <h3>section 1</h3>
        {/* <ProjectsPreview /> */}
      </section>
      <section
        onClick={() => window.location.replace("/#section1")}
        style={{ backgroundColor: "green", height: "100vh" }}
        id="section3"
      >
        <h3>section 1</h3>
      </section>
      <section
        onClick={() => window.location.replace("/#section1")}
        style={{
          height: "20vh",
          width: "100vw",
        }}
        id="section4"
      >
        <h3>section 1</h3>
      </section>
      hi
    </div>
  );
};

export default Landing;

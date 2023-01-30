import React from "react";
import Particles from "./Particles";

const Introduction = () => {
  return (
    <section style={{ height: "100vh" }} id="section1">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "10%",
        }}
      >
        <h1 style={{ fontSize: "8rem", fontFamily: "Aboreto", color: "white" }}>
          Lorem Ipsum
        </h1>
        <div
          style={{
            fontFamily: "Montserrat",
            color: "white",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu enim
            et purus finibus tempus. Phasellus congue justo id viverra laoreet.
            Vivamus id elit a nisl lobortis hendrerit. Mauris ornare, nulla quis
            condimentum vehicula, mauris eros ultricies velit, eget ultricies
            lorem lectus eu mi. Duis vel facilisis libero. Mauris id mauris et
            nunc posuere lobortis. Maecenas quis lacus tortor. Curabitur ligula
            tortor, hendrerit condimentum ullamcorper eget, imperdiet sit amet
            dolor.
          </p>
          <p>
            Nullam quis porttitor justo. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Donec eu egestas sapien. Pellentesque
            vestibulum ante vitae hendrerit laoreet.
          </p>
        </div>
        <Particles />
        <div style={{ marginTop: "20%" }}>
          <span onClick={() => window.location.replace("/#section2")}>
            <i
              class="fa-sharp fa-solid fa-circle-chevron-down"
              style={{ color: "white", fontSize: "3rem" }}
            ></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

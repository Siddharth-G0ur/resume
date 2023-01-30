import React from "react";
import ScrollableText from "./ScrollableText";
import VideoPlayer from "./VideoPlayer";

const ProjectsPreview = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ScrollableText />
      <VideoPlayer />
    </div>
  );
};

export default ProjectsPreview;

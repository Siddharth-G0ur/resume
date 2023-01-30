import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const VideoPlayer = ({ url }) => {
  return (
    <div className="" style={{ width: "35%" }}>
      <video
        style={{
          width: "100%",
          borderRadius: "40px",
        }}
        autoPlay
        muted
        loop
        src={url}
      ></video>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};
const mapStateToProps = (state) => ({
  url: state.videoUrl,
});

export default connect(mapStateToProps)(VideoPlayer);

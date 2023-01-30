import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import OnScreen from "onscreen";
import { connect } from "react-redux";
import getVideoUrl from "../actions/videoUrl";
import PropTypes from "prop-types";

const ScrollableText = ({ getVideoUrl }) => {
  const os = new OnScreen();
  const v1 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
  const v2 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
  const v3 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";

  os.on("enter", "#panel1", () => {
    getVideoUrl(v1);
  });
  os.on("enter", "#panel2", () => {
    getVideoUrl(v2);
  });
  os.on("enter", "#panel3", () => {
    getVideoUrl(v3);
  });

  return (
    <div className="content" style={{ width: "45%" }}>
      <div className="container" id="panel1">
        <div style={{ backgroundColor: "White", width: "100%" }}>
          <Card className="mb-2 border-0">
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>lol</Card.Title>
              <Card.Text
                style={{
                  fontWeight: "600",
                  fontSize: "4.5rem",
                }}
              >
                lolol
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "1.5rem",
                  marginTop: "10%",
                }}
              >
                lololo
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container" id="panel2">
        <div style={{ backgroundColor: "White", width: "100%" }}>
          <Card className="mb-2 border-0">
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>lol</Card.Title>
              <Card.Text
                style={{
                  fontWeight: "600",
                  fontSize: "4.5rem",
                }}
              >
                lolol
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "1.5rem",
                  marginTop: "10%",
                }}
              >
                lololo
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container" id="panel3">
        <div style={{ backgroundColor: "White", width: "100%" }}>
          <Card className="mb-2 border-0">
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>lol</Card.Title>
              <Card.Text
                style={{
                  fontWeight: "600",
                  fontSize: "4.5rem",
                }}
              >
                lolol
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "1.5rem",
                  marginTop: "10%",
                }}
              >
                lololo
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

ScrollableText.propTypes = {
  getVideoUrl: PropTypes.func.isRequired,
};

export default connect(null, { getVideoUrl })(ScrollableText);

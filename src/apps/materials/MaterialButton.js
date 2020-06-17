import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const MaterialButton = () => {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>
        Material World!
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <p style={{ fontFamily: "Open Sans" }}>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </p>
    </div>
  );
};

export default MaterialButton;

import React from "react";
import { func, string } from "prop-types";
import { Switch } from "@material-ui/core";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return <Switch checked={}></Switch>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

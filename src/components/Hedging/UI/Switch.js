import React from "react";
import classes from "./Switch.Module.css";

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <label
      style={{ background: isOn && onColor }}
      className={classes.reactSwitch}
    >
      <input
        checked={isOn}
        onChange={handleToggle}
        className={classes.reactSwitchCheckbox}
        type="checkbox"
      />
      <div className={classes.reactSwitchButton} />
      <div className={classes.reactSwitchLabels}>
        <span>PT</span>
        <span>EN</span>
      </div>
    </label>
  );
};

export default Switch;

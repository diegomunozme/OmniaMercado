import classes from "./Landing.module.css";
import React, { useState } from "react";
import CreateContract from "./Hedging/CreateContract";

const Navigation = (props) => {
  const [staking, setStaking] = useState("");

  const handleStake = (props) => {
    setStaking({});
  };
  const stakingModuleHandler = () => {
    setStaking(null);
  };
  return (
    <div
      className={classes.App}
      style={{ textAlignVertical: "center", textAlign: "center" }}
    >
      {staking && (
        <CreateContract
          title="Hashback Liquidity Pool"
          message="Help us grow our liquidity pool and earn HBT during the process!"
          onConfirm={stakingModuleHandler}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button className={classes.buttons} onClick={handleStake}>
          Create a Hedge
        </button>
        <button className={classes.buttons}>Find a Hedge</button>
      </div>
    </div>
  );
};

export default Navigation;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classes from "./CreateContract.module.css";
import Housing from "./HousingS1";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  align-items: right;
  border-radius: 15px;
`;

const CreateContract = (props) => {
  const [housing, setHousing] = useState("");

  const handleHousing = (props) => {
    setHousing({});
  };
  const housingModuleHandler = () => {
    setHousing(null);
  };

  return (
    <div>
      {housing && (
        <Housing
          title="Select Options"
          message="Housing"
          onConfirm={housingModuleHandler}
        />
      )}
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2 style={{ color: "black" }}>{props.title}</h2>
          <small
            style={{ color: "black" }}
            className="title-card-right"
          ></small>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
          <hr />
          <div className={classes.grid}>
            <Button onClick={handleHousing}>Housing</Button>
            <Button onClick={props.onConfirm}>Supply Chain</Button>
            <Button onClick={props.onConfirm}>Commodities</Button>
            <Button onClick={props.onConfirm}>COVID</Button>
            <Button onClick={props.onConfirm}>Weather</Button>
            <Button onClick={props.onConfirm}>Retail</Button>
          </div>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default CreateContract;

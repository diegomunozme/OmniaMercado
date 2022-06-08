import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classes from "./CreateContract.module.css";

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
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>THIS IS A TITLE </h2>
          <small
            style={{ color: "white" }}
            className="title-card-right"
          ></small>
        </header>
        <div className={classes.content}>
          <p>MANY THINGS HERE</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default CreateContract;

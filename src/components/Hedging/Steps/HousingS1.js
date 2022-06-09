import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classes from "./Housings1.module.css";
import Switch from "../UI/Switch";

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
  const [value, setValue] = useState(false);
  return (
    <div>
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
          <div>
            <Switch
              onColor="#fff"
              isOn={value}
              handleToggle={() => setValue(!value)}
            />
          </div>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Go Back</Button>
        </footer>
      </Card>
    </div>
  );
};

export default CreateContract;

import classes from "./styles.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const App = () => {
  return (
    <div className={classes.App}>
      <h1>Welcome to OmniaMercado</h1>
      <h2>We'll hedge it</h2>
      <Button>LesGetIt</Button>
      <Button>LesGetIt</Button>
    </div>
  );
};

export default App;

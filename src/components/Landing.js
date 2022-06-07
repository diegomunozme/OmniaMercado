import classes from "./Landing.module.css";

const App = () => {
  return (
    <div
      className={classes.App}
      style={{ textAlignVertical: "center", textAlign: "center" }}
    >
      <h1>OmniaMercado</h1>
      <h2>Hedge Yourself</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button className={classes.buttons}>Create a Hedge</button>
        <button className={classes.buttons}>Find a Hedge</button>
      </div>
    </div>
  );
};

export default App;

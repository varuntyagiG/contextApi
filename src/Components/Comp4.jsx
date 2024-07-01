import { useContext } from "react";
import Counterstatesss from "./CreateContext";

function Comp4() {
  let value = useContext(Counterstatesss);

  return (
    <>
      <p>Count : ({value.count})</p>
      <button
        onClick={() => {
          value.setCount(value.count + 1);
        }}
        style={{
          backgroundColor: "red",
          borderRadius: "15px",
          height: "25px",
          width: "100px",
        }}
      >
        Increase
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() => {
          value.setCount(value.count - 1);
        }}
        style={{
          backgroundColor: "grey",
          borderRadius: "15px",
          height: "25px",
          width: "100px",
        }}
      >
        Decrease
      </button>
    </>
  );
}

export { Comp4 };

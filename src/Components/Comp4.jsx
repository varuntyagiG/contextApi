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
      >
        Increase
      </button>
      <button
        onClick={() => {
          value.setCount(value.count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export { Comp4 };

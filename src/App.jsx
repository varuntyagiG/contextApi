import { useState } from "react";
import { Comp1 } from "./Components/Comp1";
import Counterstatesss from "./Components/CreateContext";

function App() {
  let [count, setCount] = useState(0);

  return (
    <Counterstatesss.Provider value={{ count, setCount }}>
      <Comp1 />
    </Counterstatesss.Provider>
  );
}

export default App;

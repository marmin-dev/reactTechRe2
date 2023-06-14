import { useState } from "react";
import Temp from "./components/Temp";
import Temp2 from "./components/Temp2";

const App = () => {
  const [temp, setTemp] = useState(0);

  const changeHandler = (e) => {
    const ff = e.target.value * (9 / 5) + 32;
    setTemp(ff);
  };

  return (
    <>
      <Temp changeHandler={changeHandler} />
      <Temp2 temp={temp} />
      <div>
        {temp >= 100 ? <h2>물이 끓습니다</h2> : <h2>물이 끓지 않습니다</h2>}
      </div>
    </>
  );
};

export default App;

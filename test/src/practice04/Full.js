import { useState } from "react";
import Controller from "./Controller";
import Display from "./Display";

const Full = () => {
  const [cc, setCc] = useState(0);
  return (
    <>
      <button>Reset</button>
      <Controller setCc={setCc} cc={cc} />
      <Display cc={cc} />
    </>
  );
};
export default Full;

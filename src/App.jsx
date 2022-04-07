import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwicthShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you ?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine !</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up!</button>
      <br />
      <button onClick={onClickSwicthShowFlag}>ON / OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ＾∀＾)</p>}
    </>
  );
};

export default App;

import { useState } from "react";
import {ButtonDiv} from "./styles"

const ToggleVisibility = ({ children }) => {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }

  var buttonText = show ? "-" : "+";

  return (
    <ButtonDiv>
      {show && children}
      <button id="toggleBtn" onClick={toggleShow}>{buttonText}</button>
    </ButtonDiv>
  );
};

export default ToggleVisibility;

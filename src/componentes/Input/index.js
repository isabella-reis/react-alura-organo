import { InputLabel, InputBox } from "./styles";

const Input = (props) => {
  const handleWhenTyping = (event) => {
    props.handleWhenChanged(event.target.value);
  };

  return (
    <div className="campo-texto">
      <InputLabel label={props}>{props.label}</InputLabel>
      <InputBox>
        <input
          value={props.value}
          onChange={handleWhenTyping}
          required={props.required}
          placeholder={props.placeholder}
        ></input>
      </InputBox>
    </div>
  );
};

export default Input;

//onChange --> vamos fazer que toda vez que algo for digitado ele escute;
//Assim damos um jeito de pegar esse valor e conseguimos guardá-lo numa variável;

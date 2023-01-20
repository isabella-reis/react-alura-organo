import { InputLabel, InputBox } from "./styles";

const Input = (props) => {
  return (
    <div className="campo-texto">
      <InputLabel label={props}>{props.label}</InputLabel>
      <InputBox>
        <input placeholder={props.placeholder}></input>
      </InputBox>
    </div>
  );
};

export default Input;

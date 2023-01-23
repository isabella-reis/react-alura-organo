import { DropdownBox, DropdownLabel } from "./styles";

const Dropdown = (props) => {
  return (
    <>
      <DropdownLabel>{props.label}</DropdownLabel>
      <DropdownBox>
        <select>
          {props.itens.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </DropdownBox>
    </>
  );
};

export default Dropdown;

//Temos um array de itens (itens) e vamos mapear ele.
//Para cada item no nosso array itens, vamos retornar uma <option></option>
//E dentro dessas options vamos retornar o valor de cada item
//Conseguimos fazer isso por conta do map

import Input from "../Input";
import { FormBox, FormTitle } from "./styles";

const Form = () => {
  return (
    <FormBox>
      <form>
        <FormTitle>
          Preencha os dados para criar o card do colaborador.
        </FormTitle>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </FormBox>
  );
};

export default Form;

import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { FormBox, FormTitle } from "./styles";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <FormBox>
      <form>
        <FormTitle>
          Preencha os dados para criar o card do colaborador.
        </FormTitle>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem (http://...)"
        />
        <Dropdown label="Time" itens={teams} />
        <Button>Criar card</Button>
      </form>
    </FormBox>
  );
};

export default Form;

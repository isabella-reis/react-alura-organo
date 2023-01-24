import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { FormBox, FormTitle } from "./styles";
import { useState } from "react";

const Form = (props) => {
 

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setTeam] = useState("");

  const handleOnSubmit = (event) => {
    //Evitar que o comportamento padrão do formulário aconteça (enviar e recarregar a página)
    event.preventDefault();
    props.handleSubmitForm({ nome, cargo, imagem, team });
  };

  return (
    <FormBox>
      <form onSubmit={handleOnSubmit}>
        <FormTitle>
          Preencha os dados para criar o card do colaborador.
        </FormTitle>
        <Input
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          handleWhenChanged={(value) => setNome(value)}
        />
        <Input
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          handleWhenChanged={(value) => setCargo(value)}
        />
        <Input
          required={true}
          label="Imagem"
          placeholder="Informe o endereço do seu github! PS: nós vamos pegar seu icon :)"
          value={imagem}
          handleWhenChanged={(value) => setImagem(`${value}.png`)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={props.teamsNames}
          value={team}
          handleWhenChanged={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </FormBox>
  );
};

export default Form;

//A props handleWhenChanged está recebendo o que for escrito no input e atribuindo esse valor
//(com set do useState) como o novo estado na props value, que por sua vez está botando isso como estado atual (nome, cargo e imagem)

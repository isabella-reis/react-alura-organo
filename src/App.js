import { GlobalStyle } from "./globalStyles";
import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";

function App() {
  const teams = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborator] = useState([]);

  const handleAddNewCollaborator = (collaborator) => {
    console.log(collaborator);
    //Para adicionar um novo colaborador, nós vamos criar um array, pegar todos os colaboradores antigos e adicionar o novo
    //Usamos o set do useState para adicionar um novo colaborador
    // --> estamos usando o spread <--
    setCollaborator([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Banner />
      <Form
        handleSubmitForm={(collaborator) =>
          handleAddNewCollaborator(collaborator)
        }
      />
      {teams.map(team => <Team key={team.nome} nome={team.nome} corPrimaria={team.corPrimaria} corSecundaria={team.corSecundaria}/>)}
    </div>
  );
}

export default App;

//Criamos o array de objetos com os times e cores, dentro do nosso app nós
//fazemos o componente Team ser dinâmico .: para cada elemento dentro do array teams
//nós pegamos o nome e colocamos dentro da props nome do componente, mostrando assim na tela
//apenas o nome dos times, sem precisar colocar um por um 
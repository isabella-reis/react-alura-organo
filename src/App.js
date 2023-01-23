import { GlobalStyle } from "./globalStyles";
import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";

function App() {
  const [collaborators, setCollaborator] = useState([]);

  const handleAddNewCollaborator = (collaborator) => {
    console.log(collaborator)
    //Para adicionar um novo colaborador, nós vamos criar um array, pegar todos os colaboradores antigos e adicionar o novo
    //Usamos o set do useState para adicionar um novo colaborador
    // --> estamos usando o spread <-- 
    setCollaborator([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Banner />
      <Form handleSubmitForm={collaborator => handleAddNewCollaborator(collaborator)} />
    </div>
  );
}

export default App;

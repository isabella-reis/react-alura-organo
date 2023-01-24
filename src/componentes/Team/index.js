import { TeamBox, CollaboratorsBox } from "./styles";
import Card from "../Card";

const Team = (props) => {
  return (
    <TeamBox style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <CollaboratorsBox>
        {props.collaborators.map((collaborator) => (
          <Card
            key={collaborator.nome}
            nome={collaborator.nome}
            cargo={collaborator.cargo}
            imagem={collaborator.imagem}
          />
        ))}
      </CollaboratorsBox>
    </TeamBox>
  );
};

export default Team;

//Nosso estado "collaborators" já existe, pois criamos ele lá no App.js
//Todo colaborador possui: nome, cargo, imagem e time;
//Criamos uma propriedade collaborators que recebe o estado collaborators, dentro do nosso componente Team
//Aqui, nós chamamos e mapeamos nosso estado (que é um array) de colaboradores, e colocamos ele dinamicamente
//no nosso componente card!!!!

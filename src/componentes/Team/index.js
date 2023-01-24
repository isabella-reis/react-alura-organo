import { TeamBox } from "./styles";
import Card  from "../Card";

const Team = (props) => {
  return (
    <TeamBox style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </TeamBox>
  );
};

export default Team;

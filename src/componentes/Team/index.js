import { TeamBox } from "./styles";
import Card  from "../Card";

const Team = (props) => {
  return (
    <TeamBox>
      <h3>{props.nome}</h3>
    </TeamBox>
  );
};

export default Team;

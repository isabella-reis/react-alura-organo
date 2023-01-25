import {
  CardBox,
  CardBoxTop,
  CardBoxBottom,
  CardName,
  CardSubtitle,
} from "./styles";

const Card = (props) => {
  return (
    <CardBox>
      <CardBoxTop style={{backgroundColor: props.backgroundcolor}}>
        <img src={props.imagem} alt={`Foto de perfil de ${props.nome}`}/>
      </CardBoxTop>
      <CardBoxBottom>
        <CardName>{props.nome}</CardName>
        <CardSubtitle>{props.cargo}
        </CardSubtitle>
      </CardBoxBottom>
    </CardBox>
  );
};

export default Card;

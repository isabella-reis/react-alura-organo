import { FooterBox, FooterIcons, FooterLogo, FooterTextDiv } from "./styles";

const Footer = () => {
  return (
    <FooterBox>
        <div id="quadrado1"></div>
      <FooterIcons>
        <img src="/imagens/fb.png" alt="Logo do facebook do Organo." />
        <img src="/imagens/tw.png" alt="Logo do Twitter do Organo." />
        <img src="/imagens/ig.png" alt="Logo do Instagram do Organo." />
      </FooterIcons>
      <div id="quadrado2"></div>
      <FooterLogo>
        <img src="/imagens/logo.png" alt="Logo do Organo." />
      </FooterLogo>
      <div id="circulo1"></div>
      <FooterTextDiv>
        <p>Desenvolvido por Isabella Reis.</p>
      </FooterTextDiv>
      <div id="circulo2"></div>
    </FooterBox>
  );
};

export default Footer;

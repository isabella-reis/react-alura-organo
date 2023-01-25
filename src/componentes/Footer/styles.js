import styled from "styled-components";

export const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 213px;
  background-color: #6278f7;

  & #circulo1 {
    position: relative;
    z-index: 1;
    margin-bottom: 99px;
    margin-top: 25px;

    width: 89px;
    height: 89px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    opacity : 0.5;
  }

  #circulo2 {
    position: relative;
    z-index: 1;
    margin-bottom: 0px;
    margin-top: 100px;

    width: 111px;
    height: 111px;
    border-radius: 50%;
    border: 2px solid #95ffd4;
    opacity : 0.5;
  }

  & #quadrado2 {
    position: relative;
    z-index: 1;
    margin-bottom: 13.02px;
    margin-top: 43px;
    margin-right: 20px;

    width: 111px;
    height: 111px;
    border-bottom: 2px solid #95ffd4;
    border-left: 2px solid #95ffd4;
    border-right: 2px solid #95ffd4;
    border: 2px solid #95ffd4;

    transform: rotate(45deg);
    opacity : 0.5;
  }

  #quadrado1 {
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    margin-top: 100px;

    width: 90px;
    height: 90px;
    border-bottom: 2px solid #95ffd4;
    border-left: 2px solid #95ffd4;
    border-right: 2px solid #95ffd4;
    border: 2px solid #95ffd4;

    transform: rotate(25deg);
    opacity : 0.5;
  }
`;

export const FooterIcons = styled.div`
  margin-left: 166.8px;

  & img {
    padding: 34.69px;
    width: 32px;
  }
`;

export const FooterLogo = styled.div`
  align-items: center;
`;

export const FooterTextDiv = styled.div`
  align-items: center;
  text-align: right;

  & p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;

    padding-right: 162px;
  }
`;

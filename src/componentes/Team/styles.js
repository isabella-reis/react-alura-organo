import styled from "styled-components";

export const TeamBox = styled.section`
  text-align: center;
  padding: 32px;

  & h3 {
    font-family: "Prata";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 43px;

    padding: 8px;
    border-bottom: 4px solid; 
    /* TODO: Fazer border bottom ficar igual ao do Figma */
    display: inline-block;

    color: #212121;
  }
`;

export const CollaboratorsBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  flex-wrap: wrap;
`
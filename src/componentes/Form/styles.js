import styled from "styled-components";

export const FormTitle = styled.h2`
  font-family: "Prata", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
`;

export const FormBox = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
    
    & form {
        max-width: 80%;
        background-color: #F7F7F7;
        border-radius: 20px;
        padding: 36px 64px;
        box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
    }
`;

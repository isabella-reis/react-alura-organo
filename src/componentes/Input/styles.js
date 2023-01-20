import styled from "styled-components";

export const InputBox = styled.div`
  input {
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    margin-bottom: 24px;
  }

  & input::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #A4A4A4;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 8px;
`;

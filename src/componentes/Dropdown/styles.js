import styled from "styled-components";

export const DropdownBox = styled.div`
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 24px;

  & select {
    width: 100%;
    border: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const DropdownLabel = styled.label`
  display: block;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 8px;
`;

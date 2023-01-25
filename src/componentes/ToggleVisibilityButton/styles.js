import styled from "styled-components";

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 50px;

  & button#toggleBtn {
    width: 50px;
    height: 50px;
    font-size: medium;
    font-weight: 900;
    color: #ffffff;
    border-radius: 50%;
    border-color: #ffffff;

    background-color: #6278f7;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  button:hover {
    cursor: pointer;
  }
`;

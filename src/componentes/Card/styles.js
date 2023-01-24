import styled from "styled-components";

export const CardBox = styled.div`
  width: 272px;
  margin: 25px;

  background: #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);

  font-family: "Montserrat";
  font-style: normal;
`;

export const CardBoxTop = styled.div`
  border-radius: 10px 10px 0px 0px;
  background-color: #f0f0f0;

  & img {
    border-radius: 50%;
    width: 100px;
    position: relative;
    bottom: -50px;
  }
`;

export const CardBoxBottom = styled.div`
  background: #ffffff;
  border-radius: 0px 0px 10px 10px;
  padding-top: 40px;
  padding-bottom: 10px;
`;

export const CardName = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;
  color: #6278f7;
`;

export const CardSubtitle = styled.h5`
margin: 8px 0 15px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 0 16px;
  
  color: #212121;
`;

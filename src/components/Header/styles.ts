import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const Titulo = styled.h1`
  font-size: 48px;
  color: white;
`;

export const Carrinho = styled.div`
  margin-left: 10px;
`;

export const ContadorCarrinho = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: white;
  color: black;
  margin: -45px 0px 0px 20px;
  border-radius: 50%;
`;

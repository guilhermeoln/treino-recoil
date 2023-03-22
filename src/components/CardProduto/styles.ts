import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
`;

export const Imagem = styled.img`
  width: 80%;
`;

export const Titulo = styled.h1`
  font-size: 20px;
  margin-top: 5px;
`;

export const Categoria = styled.h3`
  font-size: 16px;
  margin-top: 5px;
  font-weight: 400;
`;

export const ConteudoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Valor = styled.h4`
  font-size: 18px;
  margin-top: 20px;
`;

export const Botao = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: black;
  color: white;
  border: none;
  margin-top: 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Favorito = styled.p`
  color: black;
  font-size: 12px;
  margin-top: 20px;
`;

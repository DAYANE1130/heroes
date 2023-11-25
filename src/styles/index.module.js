
import { css } from '@emotion/react';

export const containerStyles = css`
 
  display: flex; 
  justify-content: space-between; 
  background-color: black;
  align-items: center; /* Centraliza verticalmente os itens */
`;

export const searchBarStyles = css`
  /* Estilos para o input de busca */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

export const loginButtonStyles = css`
  /* Estilos para o botão de login */
  background-color: #fff;
  color: black;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const heroCardContainerStyles = css`
  /* Estilos para o container dos cards de heróis */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  position: absolute; /* Define a posição absoluta */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza o elemento */
`;

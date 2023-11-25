/* .container {
  background-color: black;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
}

.loginButton {
  background-color: transparent;
  color: white;
  border: none;
  font-size: 16px;
  margin-right: 10px;
}

.userIcon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.searchBar {
  margin-top: 20px;
}

.heroList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background-color: black;
  color: white;
  padding: 20px;
} */
/* import { css } from "@emotion/react"; */


// import { css } from "@emotion/react";
// export const globalStyles = css`
//   body {
//     margin: 0;
//     padding: 0;
//     background-color: black;
//     font-family: Roboto, sans-serif;
//   }
// `;

// export const containerStyles = css`
//  { padding: 20px}
// `;

// export const headerStyles = css`
//   display: flex;
//   align-items: center;
// `;

// export const loginButtonStyles = css`
//   background-color: transparent;
//   color: white;
//   border: none;
//   font-size: 16px;
//   margin-right: 10px;
// `;

// export const userIconStyles = css`
//   width: 20px;
//   height: 20px;
//   margin-right: 10px;
// `;

// export const searchBarStyles = css`
//   margin-top: 20px;
// `;

// export const heroListStyles = css`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// export const cardStyles = css`
//   background-color: black;
//   color: white;
//   padding: 20px;
// `;


// import { css } from "@emotion/react";

// export const globalStyles = css`
//   body {
//     margin: 0;
//     padding: 0;
//     background-color: black;
//     font-family: Roboto, sans-serif;
//   }
// `;

// export const containerStyles = css`
//   padding: 20px;
// `;

// export const headerStyles = css`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end; /* Coloca os elementos no canto superior direito */
// `;

// export const loginButtonStyles = css`
//   background-color: transparent;
//   color: white;
//   border: none;
//   font-size: 16px;
//   margin-left: 10px; /* Alterado para separar o botão do canto superior direito */
// `;

// export const userIconStyles = css`
//   width: 20px;
//   height: 20px;
//   margin-right: 10px;
// `;

// export const searchBarStyles = css`
//   margin-top: 20px;
//   align-self: flex-end; /* Alinha a barra de busca no canto superior direito */
// `;

// export const heroListStyles = css`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// export const cardStyles = css`
//   background-color: black;
//   color: white;
//   padding: 20px;
//   margin-bottom: 20px; /* Adicionado para separar os cards */
// `;






// export const globalStyles = css`
//   body {
//     margin: 8px; /* Adiciona margem de 8px ao redor do corpo da página */
//     padding: 50px;
//     background-color: black;
//     font-family: Roboto, sans-serif;
//   }
// `;
// export const containerStyles = css`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   background-color: black;
//   align-items: flex-end; /* Alinha o conteúdo à direita */
// `;

// export const headerStyles = css`
//   display: flex;
//   justify-content: flex-end; /* Alinha os elementos do cabeçalho à direita */
//   width: 100%; /* Garante que o cabeçalho ocupe toda a largura */
//   margin-bottom: 20px; /* Adiciona espaço abaixo do cabeçalho */
// `;


// export const loginButtonStyles = css`
//   /* Estilos para o botão de login */
//   background-color: #007bff;
//   color: #fff;
//   padding: 8px 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// export const userIconStyles = css`
//   width: 20px;
//   height: 20px;
//   margin-right: 10px;
// `;



// export const searchBarStyles = css`

//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 8px;
//   margin-right: 8px;
// `;

// export const heroListStyles = css`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// export const cardStyles = css`
//   background-color: black;
//   color: white;
//   padding: 20px;
//   margin-bottom: 20px;
// `;
// export const heroCardContainerStyles = css`
//   /* Estilos para o container dos cards de heróis */
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 16px;
// `;

// import { css } from '@emotion/react';

// export const searchBarStyles = css`
//   /* Estilos para o input de busca */
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 8px;
//   position: absolute; /* Define a posição absoluta */
//   top: 10px; /* Ajusta a distância do topo */
//   right: 10px; /* Ajusta a distância da direita */
// `;

// export const loginButtonStyles = css`
//   /* Estilos para o botão de login */
//   background-color: #007bff;
//   color: #fff;
//   padding: 8px 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   position: absolute; /* Define a posição absoluta */
//   top: 10px; /* Ajusta a distância do topo */
//   left: 10px; /* Ajusta a distância da esquerda */
// `;

// export const heroCardContainerStyles = css`
//   /* Estilos para o container dos cards de heróis */
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 16px;
// `;


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
  background-color: #007bff;
  color: #fff;
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

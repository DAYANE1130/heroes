// import { useContext, useState, useEffect } from "react";
// import { HeroContext } from '../context/HeroContext';
// import Card from "@/components/Card";
// import SearchBar from "@/components/SearchBar";
// import Modal from "react-modal";
// import Combat from "./Combat";
// import Image from "next/image";
// import CardPowerstat from "@/components/CardPowerstat";


// export async function getStaticProps() {
//   const result = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
//   const heroes = await result.json();
//   return {
//     props: {
//       heroes,
//     },
//   };
// }

// export default function Home({ heroes }) {
//   const { setHeroes, filteredHeroes, setFilteredHeroes, selectedHeroes, setSelectedHeroes } = useContext(HeroContext);
//   const [modalAberto, setModalAberto] = useState(false);

//   setHeroes(heroes);

//   const handleClearSearch = () => {
//     setFilteredHeroes([]);
//   };

//   const heroList = filteredHeroes.length > 0 ? filteredHeroes : heroes;

//   useEffect(() => {
//     if (selectedHeroes.length === 2) {
//       setModalAberto(true);
//       return () => {
//         setModalAberto(false);
//       }
//     }
//   }, [selectedHeroes])

//   const handleSelectHero = (heroId) => {
//     if (selectedHeroes.includes(heroId)) {
//       setSelectedHeroes(selectedHeroes.filter((id) => id !== heroId));
//     } else {
//       setSelectedHeroes([...selectedHeroes, heroId]);
//     }
//   };




//   // const getTotalPowerstats = (heroId) => {
//   //   console.log("ENTREI NO TOTAL")
//   //   if (heroId.length === 2) {
//   //     const [heroOne, heroTwo] = heroId;
//   //     // console.log("EUSOUUU", her, (Object.entries(her).forEach((item) =>console.log(item.name))))

//   //     const powerstatsHero1 = Object.values(heroOne.powerstats).reduce((acc, val) => acc + val, 0);
//   //     const powerstatsHero2 = Object.values(heroTwo.powerstats).reduce((acc, val) => acc + val, 0);
//   //     let winner = null;
//   //     if (powerstatsHero1 > powerstatsHero2) {
//   //       winner = heroOne;
//   //     } else {
//   //       winner = heroTwo;
//   //     };
//   //   }


//   // };
//   const sumPowerstats = (hero) => {
//     let sum = 0;
//     for (const key in hero.powerstats) {
//       sum += parseInt(hero.powerstats[key]);
//     }
//     return sum;
//   }
  
//   const winner = hero1.powerstats > hero2.powerstats ? hero1 : hero2;
  
  

//   return (
//     <div>
//       <h2>Listagem de Heróis</h2>
//       <SearchBar onClearSearch={handleClearSearch} />
//       <div>
//         {heroList.map((hero) => (
//           <Card key={hero.id} hero={hero} onSelectHero={handleSelectHero} isSelected={selectedHeroes.includes(hero.id)} />
//         ))}
//       </div>
//       <Modal
//         isOpen={modalAberto}
//         onRequestClose={() => { setSelectedHeroes([]); setModalAberto(false) }}
//         contentLabel="Exemplo de Modal"
//       >
//         <h2>Resultado do Combate!</h2>
    
//         <div>

//           {selectedHeroes.length ===2 && selectedHeroes.map((heroId) => {
//             // {getTotalPowerstats(selectedHeroes)}
//             //  { Object.values(selectedHeroes.powerstats)}
//             const heroFound = heroes.find((hero) => hero.id === heroId)
//             const selectedHeroes = heroes.map((her) => her)

//             return (
//               <div key={heroFound.id} >

//                 <h3>{heroFound.name}</h3>
//                 <ul>{ Object.values(heroFound.powerstats)}</ul>
//                 {/* <div>

//                   {selectedHeroes.map((item) => (
//                     <CardPowerstat key={item.id} item={item} total={getTotalPowerstats} />
//                   ))}
//                 </div> */}


//                 <Image
//                   src={heroFound.images.sm}
//                   width={120}
//                   height={120}
//                   alt={heroFound.name}
//                 />
//                 {/* <CardPowerstat key={heroFound.id} heroFound={heroFound} /> */}
//               </div>
//             )
//           })}
//         </div>
//         <button onClick={() => { setSelectedHeroes([]); setModalAberto(false) }}>Fechar Janela</button>
//       </Modal>

//     </div>
//   );
// }


import { useContext, useState, useEffect } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import ModalCard from "@/components/Modal";
import CardPowerstat from "@/components/CardPowerstat";
import Link from 'next/link'

import { css } from "@emotion/react";
import {
  Container,
  Button,
  IconButton,
  Grid
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";


import {
  containerStyles,
  headerStyles,
  loginButtonStyles,
  userIconStyles,
  searchBarStyles,
  heroListStyles,
  cardStyles,
  heroCardContainerStyles
} from "../styles/index.module.js";
import styles from "../styles/Navbar.module.css"


export async function getStaticProps() {
  const result = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
  const heroes = await result.json();
  return {
    props: {
      heroes,
    },
  };
}

export default function Home({ heroes }) {
  const { setHeroes, filteredHeroes, setFilteredHeroes, selectedHeroes, setSelectedHeroes } = useContext(HeroContext);
  const [modalOpen, setModalOpen] = useState(false);

  setHeroes(heroes);

  const handleClearSearch = () => {
    setFilteredHeroes([]);
  };

  const heroList = filteredHeroes.length > 0 ? filteredHeroes : heroes;

  useEffect(() => {
    if (selectedHeroes.length === 2) {
      setModalOpen(true);
    }
  }, [selectedHeroes]);

  const handleSelectHero = (heroId) => {
    if (selectedHeroes.includes(heroId)) {
      setSelectedHeroes(selectedHeroes.filter((id) => id !== heroId));
    } else {
      setSelectedHeroes([...selectedHeroes, heroId]);
    }
  };

  // return (
  //   <div >

  //     <SearchBar  onClearSearch={handleClearSearch} />
  //     <div >
   
  //       <div>
  //       {heroList.map((hero) => (
  //         <Card
  //           key={hero.id}
  //           hero={hero}
  //           onSelectHero={handleSelectHero}
  //           selected={selectedHeroes.includes(hero.id)}
  //         />
  //       ))}
  //       </div>

  //     </div>
  //     {modalOpen && (
  //       <ModalCard onClose={() => setModalOpen(false)}>
  //         <h2>O vencedor é:</h2>
  //         <CardPowerstat hero1={heroes.find((hero) => hero.id === selectedHeroes[0])} hero2={heroes.find((hero) => hero.id === selectedHeroes[1])} />
  //       </ModalCard>
  //     )}
  //   </div>
  // );
  // return (
  //   <Container  css={containerStyles}>
  
  //     <SearchBar  css={searchBarStyles} onClearSearch={handleClearSearch} />

  //     <div css={headerStyles}>
  //       <Button variant="outlined" css={loginButtonStyles}>
  //         Login
  //       </Button>
  //       <IconButton css={userIconStyles}>
  //         <AccountCircle />
  //       </IconButton>
  
  //     </div>

  //     <Grid container spacing={2} css={heroListStyles}>
  //       {heroList.map((hero) => (
  //         <Grid item xs={12} sm={6} md={4} key={hero.id}>
  //           <Card
  //             css={heroCardContainerStyles}
  //             hero={hero}
  //             onSelectHero={handleSelectHero}
  //             selected={selectedHeroes.includes(hero.id)}
  //           />
  //         </Grid>
  //       ))}
  //     </Grid>

  //     {modalOpen && (
  //       <ModalCard onClose={() => setModalOpen(false)}>
  //         <h2>O vencedor é:</h2>
  //         <CardPowerstat hero1={heroes.find((hero) => hero.id === selectedHeroes[0])} hero2={heroes.find((hero) => hero.id === selectedHeroes[1])} />
  //       </ModalCard>
  //     )}
  //   </Container>
  // );



  return (
    <Container css={containerStyles}>
      <Button variant="outlined" css={loginButtonStyles}>
        Login
      </Button>
      <SearchBar css={searchBarStyles} onClearSearch={handleClearSearch} />
  
      <Grid container spacing={2} css={heroCardContainerStyles}>
        {heroList.map((hero) => (
          <Grid item xs={12} sm={6} md={4} key={hero.id}>
            <Card
              hero={hero}
              onSelectHero={handleSelectHero}
              selected={selectedHeroes.includes(hero.id)}
            />
          </Grid>
        ))}
      </Grid>
  
      {modalOpen && (
        <ModalCard onClose={() => setModalOpen(false)}>
          <h2>O vencedor é:</h2>
          <CardPowerstat
            hero1={heroes.find((hero) => hero.id === selectedHeroes[0])}
            hero2={heroes.find((hero) => hero.id === selectedHeroes[1])}
          />
        </ModalCard>
      )}
    </Container>
  );
  
}

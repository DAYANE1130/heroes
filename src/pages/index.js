
import { useContext, useState, useEffect } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import ModalCard from "@/components/Modal";
import CardPowerstat from "@/components/CardPowerstat";
import { Button,Grid } from "@mui/material";
import {loginButtonStyles,heroCardContainerStyles} from "../styles/index.module.js";



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

return (
  <div id = "container">
     <h1>Listagem de heróis</h1>
     <h3> Clique em dois herois da sua escolha e inicie o combate </h3>
    <div id="leftbox">
    <Button  variant="outlined" css={loginButtonStyles}>
      Login
    </Button>
    </div>

    
<div id="middlebox">

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
  
   </div>
   <div id="rightbox">
   <SearchBar  onClearSearch={handleClearSearch} />
   </div>

    {modalOpen && (
      <ModalCard onClose={() => setModalOpen(false)}>
        <CardPowerstat
          hero1={heroes.find((hero) => hero.id === selectedHeroes[0])}
          hero2={heroes.find((hero) => hero.id === selectedHeroes[1])}
        />
      </ModalCard>
    )}
  </div>
);

}

   

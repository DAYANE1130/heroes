import { useContext } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Combat from "./Combat";


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
 

  setHeroes(heroes);

  const handleClearSearch = () => {
    setFilteredHeroes([]);
  };

  const heroList = filteredHeroes.length > 0 ? filteredHeroes : heroes;



  const handleSelectHero = (heroId) => {
    if (selectedHeroes.includes(heroId)) {
      setSelectedHeroes(selectedHeroes.filter((id) => id !== heroId));
    } else {
      setSelectedHeroes([...selectedHeroes, heroId]);
    }
  };
// console.log(selectedHeroes.length)

  return (
    <div>
      <h2>Listagem de Heróis</h2>
      <SearchBar onClearSearch={handleClearSearch} />
      <div>
        {heroList.map((hero) => (
          <Card key={hero.id} hero={hero} onSelectHero={handleSelectHero} isSelected={selectedHeroes.includes(hero.id)} />
        ))}
      </div>


    </div>
  );
}

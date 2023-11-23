import { useContext } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";

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

  const { setHeroes, filteredHeroes, setFilteredHeroes } = useContext(HeroContext);

  setHeroes(heroes);

  const handleClearSearch = () => {
    setFilteredHeroes([])
  }
const heroList = filteredHeroes.length > 0 ? filteredHeroes : heroes; 

  return (
    <div>
      <h2>Listagem de Heróis</h2>
      <SearchBar/>
      <div>
        {heroList.map(hero => (
          <Card key={hero.id} hero={hero} 
          onClearSearch = {handleClearSearch}
          />
        ))}
      </div>
    </div>
  );
}



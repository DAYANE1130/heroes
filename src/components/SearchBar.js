import { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';

export default function SearchBar() {

  const { heroes, setFilteredHeroes } = useContext(HeroContext);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredHeroes = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm)
    );
    setFilteredHeroes(filteredHeroes);
  };

  return (
    <div>
      <input type="text" placeholder="Pesquisar herói pelo nome" onChange={handleSearch} />
    </div>
  );

}
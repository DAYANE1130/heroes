
import { useContext } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";

export default function Combat({selectedHeroes}) {
  const {  selectedHeroes, setSelectedHeroes } = useContext(HeroContext);
 
 

  const handleSelectHero = (heroId) => {
    if (selectedHeroes.includes(heroId)) {
      setSelectedHeroes(selectedHeroes.filter((id) => id !== heroId));
    } else {
      setSelectedHeroes([...selectedHeroes, heroId]);
    }
  };
  const heroList = setSelectedHeroes;
console.log(selectedHeroes)

  return (
    <div>
    {heroList.map((hero) => (
      <Card key={hero.id} hero={hero} onSelectHero={handleSelectHero} isSelected={selectedHeroes.includes(hero.id)} />
    ))}
  </div>
  )
}
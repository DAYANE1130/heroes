
import { useContext } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";

export default function Combat({selectedHeroes}) {
  const {   setSelectedHeroes } = useContext(HeroContext);
 
 


  return (
    <div>
    {heroList.map((hero) => (
      <Card key={hero.id} hero={hero} onSelectHero={handleSelectHero} isSelected={selectedHeroes.includes(hero.id)} />
    ))}
  </div>
  )
}
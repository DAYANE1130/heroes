import { useState } from 'react';
import HeroContext from './HeroContext';

export default function HeroProvider({ children }) {

  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  return (
    <HeroContext.Provider value={{ heroes, setHeroes, filteredHeroes, setFilteredHeroes,selectedHeroes, setSelectedHeroes }}>
      {children}
    </HeroContext.Provider>
  );
}
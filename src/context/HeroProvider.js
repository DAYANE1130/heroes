
import { useState } from 'react';
import HeroContext from './HeroContext';

export default function HeroProvider({ children }) {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

 

  const contextValues = {
    heroes,
    setHeroes,
    filteredHeroes,
    setFilteredHeroes,
    selectedHeroes,
    setSelectedHeroes
  };

  return (
    <HeroContext.Provider value={contextValues}>
      {children}
    </HeroContext.Provider>
  );
}

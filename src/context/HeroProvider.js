import { useState } from 'react';
import HeroContext from './HeroContext';

export default function HeroProvider({ children }) {

  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  return (
    <HeroContext.Provider value={{ heroes, setHeroes, filteredHeroes, setFilteredHeroes }}>
      {children}
    </HeroContext.Provider>
  );
}
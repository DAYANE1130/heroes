import { useContext } from "react";
import { HeroContext } from '../context/HeroContext';
import Card from "@/components/Card";

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

  const { setHeroes } = useContext(HeroContext);

  setHeroes(heroes);

  return (
    <div>
      <h2>Listagem de Heróis</h2>
      <div>
        {heroes.map(hero => (
          <Card key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}



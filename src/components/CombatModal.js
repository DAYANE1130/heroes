import { useContext } from "react";
import { HeroContext } from "@/context/HeroContext";
import Image from "next/image";

export default function CombatModal({ onClose }) {

  const { selectdHeroes } = useContext(HeroContext);

  const heroOne = selectdHeroes[0];
  const heroTwo = selectdHeroes[1];

  getTotalPowerstats = (hero) => {
    const powerstats = hero.powerstats;
    let total = 0;

    for (let stat in powerstats) {
      total += parseInt(powerstats[stat]);
    }
    return total;
  };

  const winner = getTotalPowerstats(heroOne) > etTotalPowerstats(heroTwo) ? heroOne : heroTwo;

  return (
    <div>
      <div>
        <h2> Resultado do Combate </h2>
        <h3> Vencedor: {winner.name}</h3>
      </div>

      <div>
        <div>
          <h4>{heroOne.name}</h4>

          <Image src={heroOne.image} alt={heroOne.name} />

          {Object.values(heroOne.powerstats).map((value, index) => (

            <p key={index}>{value}</p>

          ))}

        </div>

        <div>
          {Object.keys(heroOne.powerstats).map((key, index) => (

            <p key={index}>{key}</p>
          ))}
        </div>

        <div>
          <h4>{heroTwo.name}</h4>

          <Image src={heroTwo.image} alt={heroTwo.name} />

          {Object.values(heroTwo.powerstats).map((value, index) => (

            <p key={index}>{value}</p>
          ))}

        </div>
      </div>

      <button onClick={onClose}>Fechar</button>
    </div>

  );

}
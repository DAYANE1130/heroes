
import Image from "next/image";
import style from "../styles/modal.css"

const CardPowerstat = ({ hero1, hero2 }) => {
  const sumPowerstats = (hero) => {
    let sum = 0;
    for (const key in hero.powerstats) {
      sum += parseInt(hero.powerstats[key]);
    }
    return sum;
  };

  const totalPowerstat1 = sumPowerstats(hero1);
  const totalPowerstat2 = sumPowerstats(hero2);

  const winner = totalPowerstat1 > totalPowerstat2 ? hero1 : hero2;

  const powerstatKeys = Object.keys(hero1.powerstats);

  return (
    <div>
       <h3>{winner.name} é o vencedor(a)!</h3>
      <div className={style.leftbox}>
      <Image
            src={hero1.images.md}
            width={120}
            height={120}
            alt={hero1.name} />
          <h4>{hero1.name}</h4>
          <p>Total Powerstat: {totalPowerstat1}</p>
      </div>
      <div>
          <ul className={style.rightbox}>
            {powerstatKeys.map((key) => (
              <ul key={key}>
                {hero1.powerstats[key]}
              </ul>
            ))}
          </ul>
          </div>
     
     
        <div className={style.middlebox}>
        
          <ul>
            {powerstatKeys.map((key) => (
              <ul key={key}>
                {key}
              </ul>
            ))}
          </ul>
          
  
        </div>

        <div className={style.card}>
        <Image
            src={hero2.images.md}
            width={120}
            height={120}
            alt={hero2.name} />
          <h4>{hero2.name}</h4>
          <ul className={style.card}>
            {powerstatKeys.map((key) => (
              <ul key={key}>
                {hero2.powerstats[key]}
              </ul>
            ))}
          </ul>
          <p>Total Powerstat: {totalPowerstat2}</p>
   </div>
       
       
        
      </div>
    
  );
};

export default CardPowerstat;
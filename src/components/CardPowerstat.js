

// export default function CardPowerstat({item}) {

//   return (
//     <div>
//   <ul>
//     <ul> Inteligence</ul>
//     <ul> Strength </ul>
//     <ul> Speed </ul>
//     <ul> Durability </ul>
//     <ul> Power </ul>
//     <ul> Combat </ul>
//   </ul>

//   {Object.values(item.powerstats)}

//     </div>
//   );
// }


import Image from "next/image";

// const CardPowerstat = ({ hero1, hero2 }) => {
//   const sumPowerstats = (hero) => {
//     let sum = 0;
//     for (const key in hero.powerstats) {
//       sum += parseInt(hero.powerstats[key]);
//     }
//     return sum;
//   };

//   const totalPowerstat1 = sumPowerstats(hero1);
//   const totalPowerstat2 = sumPowerstats(hero2);

//   const winner = totalPowerstat1 > totalPowerstat2 ? hero1 : hero2;

//   return (
//     <div>
//       <h3>{winner.name} é o vencedor!</h3>
//       <div className="hero-container">
//         <div className="hero-card">
//           <Image src={hero1.images.md} width={120}
//         height={120} alt={hero1.name} />
//           <h4>{hero1.name}</h4>
//           <ul>
//             {Object.keys(hero1.powerstats).map((key) => (
//               <li key={key}>
//                 {key}: {hero1.powerstats[key]}
//               </li>
//             ))}
//           </ul>
//           {/* <p>Total Powerstat: {totalPowerstat1}</p> */}
//         </div>
//         <div className="hero-card">
//           <Image  src={hero2.images.md}  width={120}
//         height={120} alt={hero2.name} />
//           <h4>{hero2.name}</h4>
//           <ul>
//             {Object.keys(hero2.powerstats).map((key) => (
//               <li key={key}>
//                 {key}: {hero2.powerstats[key]}
//               </li>
//             ))}
//           </ul>
//           {/* <p>Total Powerstat: {totalPowerstat2}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

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
      <h3>{winner.name} é o vencedor!</h3>
      <div className="hero-container">
        <div className="hero-card">
          <Image
            src={hero1.images.md}
            width={120}
            height={120}
            alt={hero1.name} />
          <h4>{hero1.name}</h4>
          <ul>
            {powerstatKeys.map((key) => (
              <ul key={key}>
                {key}
              </ul>
            ))}
          </ul>
          <ul>
            {powerstatKeys.map((key) => (
              <ul key={key}>
                {hero1.powerstats[key]}
              </ul>
            ))}
          </ul>
          <p>Total Powerstat: {totalPowerstat1}</p>
        </div>
        <div className="hero-card">
          <Image 
          src={hero2.images.md} 
          width={120}
          height={120}
          alt={hero2.name} />
          <h4>{hero2.name}</h4>
          <ul>
            {powerstatKeys.map((key) => (
              <ul key={key}>
                {hero2.powerstats[key]}
              </ul>
            ))}
          </ul>
          <p>Total Powerstat: {totalPowerstat2}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPowerstat;
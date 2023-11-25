// import Image from "next/image";

// const Modal = ({ hero1, hero2, winner }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>{winner.name} é o vencedor!</h2>
//         <div className="hero-container">
//           <div className="hero-card">
//             <Image src={hero1.images.sm} alt={hero1.name} />
//             <h3>{hero1.name}</h3>
//             <ul>
//               {Object.keys(hero1.powerstats).map((key) => (
//                 <li key={key}>
//                   {key}: {hero1.powerstats[key]}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="hero-card">
//             <Image src={hero2.images.sm} alt={hero2.name} />
//             <h3>{hero2.name}</h3>
//             <ul>
//               {Object.keys(hero2.powerstats).map((key) => (
//                 <li key={key}>
//                   {key}: {hero2.powerstats[key]}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import { useContext, useState, useEffect } from "react";
// import { HeroContext } from '../context/HeroContext';
// import Card from "@/components/Card";
// import SearchBar from "@/components/SearchBar";
// import Modal from "@/components/Modal";
// import CardPowerstat from "@/components/CardPowerstat";

// export async function getStaticProps() {
//   const result = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
//   const heroes = await result.json();
//   return {
//     props: {
//       heroes,
//     },
//   };
// }

// export default function Home({ heroes }) {
//   const { setHeroes, filteredHeroes, setFilteredHeroes, selectedHeroes, setSelectedHeroes } = useContext(HeroContext);
//   const [modalOpen, setModalOpen] = useState(false);

//   setHeroes(heroes);

//   const handleClearSearch = () => {
//     setFilteredHeroes([]);
//   };

//   const heroList = filteredHeroes.length > 0 ? filteredHeroes : heroes;

//   useEffect(() => {
//     if (selectedHeroes.length === 2) {
//       setModalOpen(true);
//     }
//   }, [selectedHeroes]);

//   const handleSelectHero = (heroId) => {
//     if (selectedHeroes.includes(heroId)) {
//       setSelectedHeroes(selectedHeroes.filter((id) => id !== heroId));
//     } else {
//       setSelectedHeroes([...selectedHeroes, heroId]);
//     }
//   };

//   return (
//     <div>
//       <SearchBar onClearSearch={handleClearSearch} />
//       <div className="hero-list">
//         {heroList.map((hero) => (
//           <Card
//             key={hero.id}
//             hero={hero}
//             onSelectHero={handleSelectHero}
//             selected={selectedHeroes.includes(hero.id)}
//           />
//         ))}
//       </div>
//       {modalOpen && (
//         <Modal onClose={() => setModalOpen(false)}>
//           <h2>O vencedor é:</h2>
//           <CardPowerstat hero1={heroes.find((hero) => hero.id === selectedHeroes[0])} hero2={heroes.find((hero) => hero.id === selectedHeroes[1])} />
//         </Modal>
//       )}
//     </div>
//   );
// }

import Modal from "react-modal";
import { useState } from "react";

const ModalCard = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {children}
      <button onClick={closeModal}>Fechar</button>
    </Modal>
  );
};

export default ModalCard;
import Image from "next/image";
import style from "../styles/index.css"

export default function Card({ hero, onSelectHero, isSelected }) {
  const handleSelectHero = () => {
    onSelectHero(hero.id);
  };

  return (
    <div id="card" onClick={handleSelectHero}>
      <h3 className={style.h3}>{hero.name}</h3>
      <Image
        src={hero.images.sm}
        width={190}
        height={220}
        alt={hero.name}
      />
      {isSelected && <p>Selecionado</p>}
    </div>
  );
}

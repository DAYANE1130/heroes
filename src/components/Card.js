import Image from "next/image";

export default function Card({ hero, onSelectHero, isSelected }) {
  const handleSelectHero = () => {
    onSelectHero(hero.id);
  };

  return (
    <div onClick={handleSelectHero}>
      <h3>{hero.name}</h3>
      <Image
        src={hero.images.sm}
        width={120}
        height={120}
        alt={hero.name}
      />
      {isSelected && <p>Selecionado</p>}
    </div>
  );
}

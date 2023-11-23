import Image from "next/image";

export default function Card({ hero }) {
  return (
    <div>
      <h3>{hero.name}</h3>
      <Image
        src={hero.images.md}
        width={220}
        height={220}
        alt={hero.name}
      />
    </div>
  );
}

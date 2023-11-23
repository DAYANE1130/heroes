
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
  return (
    <div>
      <h1>Esta é a página inicial</h1>
      <p>Aqui você pode adicionar seu conteúdo específico para esta página.</p>
      <section>
        {heroes.map((hero) => (
          <div key={hero.id}>
            <h2>{hero.name}</h2>
            <p>Gender: {hero.appearance.gender}</p>
          </div>
        ))}
      </section>
    </div>
  );
}



import AnimalCard from "./shared/AnimalCard";

const FeaturedAnimals = async () => {
  const res = await fetch("https://my-assignment-8-chi.vercel.app/animalData.json",{cache:"no-store"});
  const data = await res.json();

  const animalData = data.slice(0, 4);

  console.log(data);

  return (
    <div>
      <div className="w-11/12 mx-auto mt-5">
        <h1 className="text-3xl font-bold">Featured Animals</h1>
        <div className="grid grid-cols-1 md:grid-cols-4  py-4 gap-4">
          {animalData.map((d) => (
            <AnimalCard key={d.id} animal={d}></AnimalCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAnimals;

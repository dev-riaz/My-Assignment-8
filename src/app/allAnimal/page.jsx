import AnimalCard from "@/components/shared/AnimalCard";

const AllAnimalPage = async () => {
  const res = await fetch(
    "https://my-assignment-8-chi.vercel.app/animalData.json",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();

  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-6">
        <h1 className="text-3xl font-bold">All Animals</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
          {data.map((d) => (
            <AnimalCard key={d.id} animal={d}></AnimalCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimalPage;

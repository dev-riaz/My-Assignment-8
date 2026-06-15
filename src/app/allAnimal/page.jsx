import Sort from "@/components/shared/Sort";

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
      <div className="w-11/12 mx-auto py-6 animate__animated animate__slideInUp ">
        <h1 className="text-3xl font-bold">All Animals</h1>
        <div className="mt-4">
          <Sort data={data}></Sort>
        </div>
      </div>
    </div>
  );
};

export default AllAnimalPage;

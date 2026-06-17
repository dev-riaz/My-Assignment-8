import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalCard = ({ animal }) => {
  const { image } = animal;

  return (
    <div>
      <div className="shadow-sm bg-white rounded-2xl transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative flex justify-center items-center">
          <div className="absolute left-2 top-2 z-10  bg-[#0c4532] text-white text-xs font-semibold py-1 px-3 rounded-full">
            {animal.type}
          </div>
          <div className="relative w-full h-[250px]">
            <Image
              src={image}
              alt="cow image"
              fill
              className="object-cover rounded-t-2xl"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="p-3 space-y-2 text-[#42654d]">
          <h2 className="card-title">{animal.name}</h2>
          <div className="flex items-center gap-3">
            <p className="font-semibold">{animal.weight} Kg</p>
            <p>{animal.location}</p>
          </div>
          <h2 className="text-xl font-bold">{animal.price} TK</h2>
          <div className="">
            <Link href={`/allAnimal/${animal.id}`}>
              <button className="btn w-full rounded-xl bg-[#0c4532] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;

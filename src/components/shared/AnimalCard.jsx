import Image from "next/image";
import React from "react";

const AnimalCard = ({ animal }) => {
  const { image } = animal;
  console.log(image);

  return (
    <div>
      <div className="card shadow-sm bg-white rounded-2xl">
        <div className="flex justify-center items-center">
          <div className="absolute top-1 left-1 bg-[#0c4532] text-white text-xs font-semibold py-1 px-3 rounded-full">{animal.type}</div> 
          <Image
            className="w-full h-50 rounded-t-2xl"
            src={image}
            height={200}
            width={200}
            alt="cow image"
          ></Image>
        </div>
        <div className="p-3 space-y-2 text-[#42654d]">
          <h2 className="card-title">{animal.name}</h2>
          <div className="flex items-center gap-3">
            <p className="font-semibold">{animal.weight} Kg</p>
            <p>{animal.location}</p>
          </div>
          <h2 className="text-xl font-bold">{animal.price} TK</h2>
          <div className="">
            <button className="btn w-full rounded-xl bg-[#0c4532] text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;

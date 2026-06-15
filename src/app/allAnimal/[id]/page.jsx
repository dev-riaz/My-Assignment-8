import OrderForm from "@/components/shared/OrderForm";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://my-assignment-8-chi.vercel.app/animalData.json",
  );
  const detailsData = await res.json();

  const details = detailsData.find((d) => d.id == id);

  return (
    <div className="bg-white">
      <div className="py-6 min-h-screen w-11/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row flex justify-between items-center gap-14">
          <div className="">
            <Image
              src={details.image}
              alt={details.name}
              width={200}
              height={200}
              className="w-xl h-full rounded-2xl"
            />
          </div>
          <div className="space-y-4">
            <p className="bg-amber-300/30 text-amber-500 inline-block py-1 px-3 rounded-full font-semibold">
              Breed : <span className="text-xs">{details.breed}</span>
            </p>
            <p className="text-gray-500">
              <span className="font-bold">Type</span> : {details.type}
            </p>
            <h1 className="text-3xl font-bold text-gray-500">{details.name}</h1>
            <p className="text-xl font-bold text-gray-500">
              {details.price} Tk
            </p>
            <div className="flex gap-2 items-center ">
              <div className="space-y-3">
                <div className="bg-[#e6f8d1] py-2 px-8 rounded-xl text-xs">
                  <span className="font-bold text-[15px]">Weight </span> <br />{" "}
                  {details.weight} kg
                </div>
                <div className="bg-[#e6f8d1] py-2 px-8 rounded-xl text-xs">
                  <span className="font-bold text-[15px]"> Age</span>
                  <br /> {details.age} Years Old
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-[#e6f8d1] py-2 px-8 rounded-xl text-xs">
                  <span className="font-bold text-[15px]">Location </span>
                  <br /> {details.location}
                </div>
                <div className="bg-[#e6f8d1] py-2 px-8 rounded-xl text-xs">
                  <span className="font-bold text-[15px]">Category </span>{" "}
                  <br /> {details.category}
                </div>
              </div>
            </div>
            <p className="text-gray-500">{details.description}</p>
            <Link className=" flex justify-end" href={"/allAnimal"}>
              <button className="btn  bg-[#0c4532] text-white rounded-2xl">
                Back
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>

        <OrderForm></OrderForm>
      </div>
    </div>
  );
};

export default DetailsPage;

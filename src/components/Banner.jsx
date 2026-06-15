import image1 from "@/assets/bannar cow image.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[#14532D]">
      
      <div className="min-h-screen w-11/12 mx-auto flex justify-center items-center">
        <div className="flex justify-between items-center w-full flex-col lg:flex-row-reverse py-4 gap-4">
          <div className="bg-[#c1e2be4e] rounded-4xl animate__animated animate__slideInRight">
            <Image
              className=""
              src={image1}
              width={400}
              height={400}
              alt="cow image"
            ></Image>
          </div>
          <div className="space-y-6 animate__animated animate__lightSpeedInLeft animate__slow ">
            <div className="bg-[#e7b84b4a] text-[#e7b84b] inline-block py-1 px-3 rounded-full">
              Qurbani 2025 Ready
            </div>
            <h1 className="text-5xl text-white" >
              Find Your Perfect <br /> Qurbani Animal
            </h1>
            <p className="text-white/80 text-2xl">
              Browse healthy cows & goats from trusted farmers <br /> across
              Bangladesh
            </p>
            <Link href={"/allAnimal"}><button className="btn bg-yellow-400 ">Browse Animals</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

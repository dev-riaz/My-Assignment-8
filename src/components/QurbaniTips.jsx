import Image from "next/image";
import image1 from "@/assets/icons8-success-64.png";
import image2 from "@/assets/icons8-scales-48.png";
import image3 from "@/assets/icons8-location-pin-48.png";

const QurbaniTips = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-5">
        <h1 className="text-3xl font-bold">Qurbani Tips</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          <div className="card shadow-sm bg-[#c1e2be4a]">
            <div className="card-body">
              <Image
                src={image1}
                width={50}
                height={50}
                alt="success logo"
              ></Image>
              <h2 className="card-title">Check Animal Health</h2>
              <p>
                Ensure the animal is free from disease and has proper teeth &
                eyes.
              </p>
            </div>
          </div>
          <div className="card shadow-sm bg-[#c1e2be4a]">
            <div className="card-body">
              <Image
                src={image2}
                width={50}
                height={50}
                alt="success logo"
              ></Image>
              <h2 className="card-title">Minimum Weight</h2>
              <p>Cow/Buffalo: 1+ year. Goat/Sheep: 1+ year. Camel: 5+ years.</p>
            </div>
          </div>
          <div className="card shadow-sm bg-[#c1e2be4a]">
            <div className="card-body">
              <Image
                src={image3}
                width={50}
                height={50}
                alt="success logo"
              ></Image>
              <h2 className="card-title">Buy from Locals</h2>
              <p>
                Local animals are stress-free and healthier for Qurbani
                purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;

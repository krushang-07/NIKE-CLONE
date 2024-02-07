import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          {/* <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
           Super
          </span>Shoes */}
          <br />
          <span className="text-coral-red inline-block mt-3">
            Super Qaultiy{" "}
          </span>{" "}
          Shoes
          {/* <span className="text-coral-red inline-block mt-3">Qaultiy </span> */}
        </h2>
        {/* <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p> */}
        <p className="mt-4 lg:max-w-lg info-text pb-9 pt-9 ">
          Ensuring premium comfort and style pur mesticulously crafted footwear
          is designed to elevate your exprience provding you with unmatched
          quality innovation, and a touch of elegance.
        </p>
        <div className="mt-11">
          {" "}
          <Button label="view detail" iconURL={arrowRight} />{" "}
        </div>
      </div>
      <div className="flex-1 flex justify-center item-center hover:scale-75 ease-out duration-700">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;

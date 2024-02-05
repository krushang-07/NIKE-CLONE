import { star } from "../assets/icons";
const PopulerProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full hover:scale-75 ease-out duration-700 ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <h4 className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-red-400">
        {price}
      </h4>
    </div>
  );
};

export default PopulerProductCard;

//hover:scale-75 ease-out duration-500  hover:bg-red-100 border-solid rounded-2xl p-6

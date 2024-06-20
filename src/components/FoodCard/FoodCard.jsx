import { useContext } from "react";
import { FoodContext } from "../../context/Context";

const FoodCard = ({ id, img, title, price, order }) => {
  const { addToCart } = useContext(FoodContext);

  return (
    <li
      className="p-6 w-[200px] h-[226px] uppercase text-center bg-[#1F1D2B] relative rounded-2xl mt-[40px] mb-6 cursor-pointer transition-all duration-150 hover:shadow-lg hover:shadow-[#332e4f]"
      onClick={() => addToCart(id)}
    >
      <div className="flex justify-center">
        <img
          className="w-[132px] h-[132px] block mx-auto rounded-full absolute -top-[40px]"
          src={img}
          alt={title}
          width={132}
          height={132}
        />
      </div>
      <div className="mt-20">
        <h3 className="text-sm leading-[18.2px] font-medium mb-2">{title}</h3>
        <p className="text-sm font-normal mb-1">{price}</p>
        <p className="text-sm font-normal text-[#ABBBC2]">{order}</p>
      </div>
    </li>
  );
};

export default FoodCard;

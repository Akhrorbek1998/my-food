import { useContext } from "react";
import { FoodContext } from "../../context/Context";

const CategoryFoods = () => {
  const { activeTabContent } = useContext(FoodContext);

  return (
    <div className="flex justify-between items-center pb-6">
      <h2 className="text-xl font-semibold capitalize">{activeTabContent}</h2>

      <div className="w-[100px] border-2 border-[#393C49] overflow-hidden rounded-md flex justify-between items-start bg-[#1F1D2B] relative">
        <span className="flex items-center h-full w-8 justify-center absolute">
          <i className="fa-solid fa-sort-down"></i>
        </span>
        <select className="w-full py-[14px] ps-8 pe-[14px] ring-0 outline-none text bg-[#1F1D2B] appearance-none cursor-pointer">
          <option className="text-center" value="Dine In">
            Dine In
          </option>
          <option className="text-center" value="Dine Out">
            Dine Out
          </option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFoods;

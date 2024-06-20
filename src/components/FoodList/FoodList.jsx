import { useContext } from "react";
import { foods } from "../../data";
import { FoodCard } from "../FoodCard";
import { FoodContext } from "../../context/Context";

const FoodList = () => {
  const { categoryFood } = useContext(FoodContext);
  return (
    <ul className="flex justify-between flex-wrap h-[510px] overflow-auto example">
      {foods.map((food) => {
        return (
          categoryFood === food.category && (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.image}
              title={food.title}
              price={food.price}
              order={food.order}
            />
          )
        );
      })}
    </ul>
  );
};

export default FoodList;

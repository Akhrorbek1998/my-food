import { useState } from "react";
import { Order } from "../components/Order";
import { Searchbar } from "../components/Searchbar";
import { TabContents } from "../components/TabContents";
import { FoodList } from "../components/FoodList";
import { CategoryFoods } from "../components/CategoryFoods";
import { Payment } from "../components/Payment";

const Home = () => {
  const [isPayment, setIsPayment] = useState(false);

  return (
    <div className="h-screen ps-[10px] me-[409px] pe-[38px]">
      <Order setIsPayment={setIsPayment} />
      {isPayment && (
        <Payment isPayment={isPayment} setIsPayment={setIsPayment} />
      )}
      <Searchbar />
      <TabContents />
      <CategoryFoods />
      <FoodList />
    </div>
  );
};

export default Home;

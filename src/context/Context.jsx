import { createContext, useState } from "react";
import { foods } from "../data";

export const FoodContext = createContext(null);

const getDefoultItems = () => {
  let cart = {};
  for (let i = 0; i < foods.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const FoodProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("/");
  const [foodItems, setFoodItems] = useState(getDefoultItems());
  const [categoryFood, setCategoryFood] = useState("hot dishes");
  // ----------------
  const [activeTabContent, setActiveTabContent] = useState("hot dishes");

  const handleCategory = (category) => setCategoryFood(category);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in foodItems) {
      if (foodItems[item] > 0) {
        let itemInfo = foods.find((food) => food.id === Number(item));
        totalAmount += itemInfo.price * foodItems[item];
      }
    }

    return totalAmount.toFixed(2);
  };

  getTotalCartAmount();

  const addToCart = (itemId) => {
    setFoodItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setFoodItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    activePage,
    setActivePage,
    foodItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    handleCategory,
    categoryFood,
    activeTabContent,
    setActiveTabContent,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;

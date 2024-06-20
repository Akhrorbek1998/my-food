import { useContext, useState } from "react";
import { TAB_TEXTS } from "../../data";
import { FoodContext } from "../../context/Context";

const TabContents = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { handleCategory, setActiveTabContent } = useContext(FoodContext);

  return (
    <ul className="flex gap-8 border-b border-b-base-dark-line cursor-pointer mb-6">
      {TAB_TEXTS.map((text, index) => (
        <li
          className={`text-sm font-semibold capitalize leading-[19.6pxpx]  translate-y-[2px] pb-4 ${
            currentTabIndex === index
              ? "border-b-4 border-b-primary text-primary"
              : "border-b-4 border-b-transparent"
          }`}
          key={text}
          onClick={() => {
            setActiveTabContent(text);
            setCurrentTabIndex(index);
            handleCategory(text);
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};

export default TabContents;

import { useContext, useEffect } from "react";
import AddNewDish from "../components/AddNewDish/AddNewDish";
import EditDish from "../components/EditDish/EditDish";
import SettingsBar from "../components/SettingsBar";
import TabContents from "../components/TabContents/TabContents";
import { FoodContext } from "../context/Context";
import { foods } from "../data";

const Settings = () => {
  const { categoryFood } = useContext(FoodContext);

  return (
    <div className="w-full pt-4 p-3">
      <h1 className="mb-3 text-2xl font-semibold">Settings</h1>
      <div className="min-w-[300px] flex gap-12 items-start">
        <SettingsBar />
        <div className="grow bg-base-dark-2 rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Products Management</h2>
            <button className="flex gap-2 items-center text-sm font-normal text-[#ABBBC2] p-4 border-2 border-base-dark-line rounded-lg">
              <span>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1976 9.7271C15.927 9.7271 17.3329 11.1148 17.3329 12.8219C17.3329 14.528 15.927 15.9167 14.1976 15.9167C12.4683 15.9167 11.0624 14.528 11.0624 12.8219C11.0624 11.1148 12.4683 9.7271 14.1976 9.7271ZM14.1976 11.1787C13.279 11.1787 12.533 11.9151 12.533 12.8219C12.533 13.7277 13.279 14.4651 14.1976 14.4651C15.1162 14.4651 15.8623 13.7277 15.8623 12.8219C15.8623 11.9151 15.1162 11.1787 14.1976 11.1787ZM7.4308 12.0958C7.83667 12.0958 8.16608 12.421 8.16608 12.8216C8.16608 13.2223 7.83667 13.5474 7.4308 13.5474H1.40247C0.996596 13.5474 0.66719 13.2223 0.66719 12.8216C0.66719 12.421 0.996596 12.0958 1.40247 12.0958H7.4308ZM3.80174 0.083374C5.53112 0.083374 6.93698 1.47207 6.93698 3.17818C6.93698 4.88429 5.53112 6.27298 3.80174 6.27298C2.07334 6.27298 0.666504 4.88429 0.666504 3.17818C0.666504 1.47207 2.07334 0.083374 3.80174 0.083374ZM3.80174 1.53497C2.88411 1.53497 2.13707 2.27238 2.13707 3.17818C2.13707 4.08397 2.88411 4.82138 3.80174 4.82138C4.72035 4.82138 5.46642 4.08397 5.46642 3.17818C5.46642 2.27238 4.72035 1.53497 3.80174 1.53497ZM16.5979 2.45257C17.0038 2.45257 17.3332 2.77773 17.3332 3.17837C17.3332 3.57901 17.0038 3.90417 16.5979 3.90417H10.5686C10.1627 3.90417 9.8333 3.57901 9.8333 3.17837C9.8333 2.77773 10.1627 2.45257 10.5686 2.45257H16.5979Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Manage Categories</span>
            </button>
          </div>
          <TabContents />
          <div
            className={`h-[420px] overflow-auto example flex flex-wrap justify-start ${
              foods.length > 3 ? "justify-between gap-4" : ""
            }`}
          >
            <AddNewDish />
            {foods.map((food) => {
              return (
                categoryFood === food.category && (
                  <EditDish
                    key={food.id}
                    image={food.image}
                    title={food.title}
                    price={food.price}
                    order={food.order}
                  />
                )
              );
            })}
          </div>
          <div className="mt-6 flex gap-2">
            <button className="w-[172px] p-[14px] border border-primary rounded-lg leading-[19.6px] text-primary hover:bg-primary hover:shadow-btn-shadow hover:text-white">
              Discard Changes
            </button>
            <button className="w-[172px] p-[14px] border border-primary rounded-lg leading-[19.6px] bg-primary shadow-btn-shadow text-white hover:bg-transparent hover:shadow-none hover:text-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

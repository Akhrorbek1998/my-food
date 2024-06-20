import foodImg1 from "../../assets/images/lagmon.png";
import analitcsImg from "../../assets/images/chart.svg";

const GraphOrder = () => {
  return (
    <div className="min-w-[396px] h-full min-h-screen top-0 right-0 px-6 py-3">
      <div className="px-6 py-4 bg-[#1F1D2B] rounded-md mb-4">
        <div className="flex items-center justify-between pb-5 border-b border-b-base-dark-line">
          <h3 className="text-xl font-semibold">Most Ordered</h3>
          <div className="w-[104px] border-2 border-[#393C49] overflow-hidden rounded-md flex justify-between items-start bg-[#1F1D2B] relative">
            <span className="flex items-center h-full w-8 justify-center absolute">
              <i className="fa-solid fa-sort-down"></i>
            </span>
            <select className="w-full py-[14px] ps-7 pe-[14px] ring-0 outline-none text-sm bg-[#1F1D2B] appearance-none cursor-pointer">
              <option value="Dine In">today</option>
              <option value="Dine Out">yesterday</option>
            </select>
          </div>
        </div>

        {/* most ordered foods */}
        <ul className="pt-4">
          <li className="flex gap-4 items-start mb-4">
            <img
              className="w-[61px] h-[61px] rounded-full"
              src={foodImg1}
              alt=""
            />
            <div>
              <h3 className="text-sm font-medium leading-[18.2px] mb-1">
                Spicy seasoned seafood noodles
              </h3>
              <p className="text-xs font-normal text-[#ABBBC2]">
                200 dishes ordered
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start mb-4">
            <img
              className="w-[61px] h-[61px] rounded-full"
              src={foodImg1}
              alt=""
            />
            <div>
              <h3 className="text-sm font-medium leading-[18.2px] mb-1">
                Spicy seasoned seafood noodles
              </h3>
              <p className="text-xs font-normal text-[#ABBBC2]">
                200 dishes ordered
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start mb-4">
            <img
              className="w-[61px] h-[61px] rounded-full"
              src={foodImg1}
              alt=""
            />
            <div>
              <h3 className="text-sm font-medium leading-[18.2px] mb-1">
                Spicy seasoned seafood noodles
              </h3>
              <p className="text-xs font-normal text-[#ABBBC2]">
                200 dishes ordered
              </p>
            </div>
          </li>
        </ul>
        <button className="w-full block p-[14px] text-sm text-primary border border-primary bg-transparent rounded-md transition-all duration-200 hover:bg-primary hover:border hover:border-primary hover:text-white hover:shadow-btn-shadow">
          View All
        </button>
      </div>
      {/* chart analitcs */}
      <div className="px-6 py-4 bg-[#1F1D2B] rounded-md">
        <div className="flex items-center justify-between pb-5 border-b border-b-base-dark-line">
          <h3 className="text-xl font-semibold">Most Type of Order</h3>
          <div className="w-[104px] border-2 border-[#393C49] overflow-hidden rounded-md flex justify-between items-start bg-[#1F1D2B] relative">
            <span className="flex items-center h-full w-8 justify-center absolute">
              <i className="fa-solid fa-sort-down"></i>
            </span>
            <select className="w-full py-[14px] ps-7 pe-[14px] ring-0 outline-none text-sm bg-[#1F1D2B] appearance-none cursor-pointer">
              <option value="Dine In">today</option>
              <option value="Dine Out">yesterday</option>
            </select>
          </div>
        </div>

        <div className="pt-8 pb-2 flex items-center justify-between">
          <img className="w-[176px]" src={analitcsImg} alt="" />
          <ul className="w-[105px]">
            <li className="flex gap-2 items-center">
              <span className="w-4 h-4 bg-[#FF7CA3] block rounded-full"></span>
              <div>
                <p className="text-sm font-medium">Dine In</p>
                <p className="text-xs font-normal text-[#ABBBC2] ">
                  200 customers
                </p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <span className="w-4 h-4 bg-[#FFB572] block rounded-full"></span>
              <div>
                <p className="text-sm font-medium">To Go</p>
                <p className="text-xs font-normal text-[#ABBBC2] ">
                  122 customers
                </p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <span className="w-4 h-4 bg-[#65B0F6] block rounded-full"></span>
              <div>
                <p className="text-sm font-medium">Delivery</p>
                <p className="text-xs font-normal text-[#ABBBC2] ">
                  264 customers
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphOrder;

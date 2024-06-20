import { Link } from "react-router-dom";
// import site-logo
import Logo from "../../assets/images/logo.svg";
// import useNavigate

import {
  HomeIcon,
  DiscountIcon,
  GraphIcon,
  MessageIcon,
  NotificationIcon,
  SettingIcon,
  LogoutIcon,
} from "../../constants";
import { useContext } from "react";
import { FoodContext } from "../../context/Context";

const Sidebar = () => {
  const { activePage, setActivePage } = useContext(FoodContext);
  return (
    <div className="h-full min-w-[104px] fixed left-0 top-0 bottom-0 bg-[#1F1D2B] ">
      {/* site logo icon */}
      <Link className="block m-6" to="/">
        <img src={Logo} alt="" />
      </Link>

      {/* navigation bar */}
      <ul className="ms-3">
        <li
          className={`p-2.5 relative rounded-s-xl mb-3 ${
            activePage === "/" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center ${
              activePage === "/" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to={"/"}
            onClick={() => setActivePage("/")}
          >
            <HomeIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-2.5 rounded-s-xl mb-3 ${
            activePage === "graph" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center ${
              activePage === "graph" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to={"dashboard"}
            onClick={() => setActivePage("graph")}
          >
            <GraphIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-2.5 rounded-s-xl mb-3 ${
            activePage === "discount" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center ${
              activePage === "discount" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to={"/"}
            onClick={() => setActivePage("discount")}
          >
            <DiscountIcon activePage={activePage} />
          </Link>
        </li>

        <li
          className={`p-2.5 rounded-s-xl mb-3 ${
            activePage === "message" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center ${
              activePage === "message" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to={"/"}
            onClick={() => setActivePage("message")}
          >
            <MessageIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-2.5 rounded-s-xl mb-3 ${
            activePage === "notification" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center ${
              activePage === "notification"
                ? "bg-[#EA7C69] shadow-btn-shadow"
                : ""
            }`}
            to={"/"}
            onClick={() => setActivePage("notification")}
          >
            <NotificationIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-2.5 rounded-s-xl mb-3 ${
            activePage === "setting" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center ${
              activePage === "setting" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to={"/settings"}
            onClick={() => setActivePage("setting")}
          >
            <SettingIcon activePage={activePage} />
          </Link>
        </li>
        <li className="px-3 py-2.5 rounded-lg left-3 absolute bottom-2">
          <Link
            className={`w-14 h-14 flex justify-center items-center rounded-md text-center`}
            to={"/"}
            onClick={() => setActivePage("/")}
          >
            <LogoutIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

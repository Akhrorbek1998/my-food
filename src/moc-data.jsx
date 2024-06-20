import { IoHeartDislikeOutline } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { RiNotification3Fill } from "react-icons/ri";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { PiWarningCircleBold } from "react-icons/pi";

export const SETTINGS_LIST = [
  {
    id: 1,
    title: "Appereance",
    desc: "Dark and Light mode, Font size",
    checked: true,
    icon: <IoHeartDislikeOutline />,
  },
  {
    id: 2,
    title: "Your Restaurant",
    desc: "Dark and Light mode, Font size",
    checked: true,
    icon: <FaBuildingColumns />,
  },
  {
    id: 3,
    title: "Products Management",
    desc: "Manage your product, pricing, etc",
    checked: true,
    icon: <MdManageHistory />,
  },
  {
    id: 4,
    title: "Notifications",
    desc: "Customize your notifications",
    checked: true,
    icon: <RiNotification3Fill />,
  },
  {
    id: 5,
    title: "Security",
    desc: "Configure Password, PIN, etc",
    checked: true,
    icon: <FaUnlockKeyhole />,
  },
  {
    id: 6,
    title: "About Us",
    desc: "Find out more about Posly",
    checked: true,
    icon: <PiWarningCircleBold />,
  },
];

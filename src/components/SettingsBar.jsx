import { useState } from "react";
import { SETTINGS_LIST } from "../moc-data";

const SettingsBar = () => {
  const [activeSettingsBar, setActiveSettingsBar] = useState("Appereance");

  return (
    <ul className="min-w-[300px] bg-base-dark-2 rounded ">
      {SETTINGS_LIST.map((item) => (
        <li
          className={` py-6 ps-6 cursor-pointer ${
            SETTINGS_LIST[0] ? "rounded-t" : ""
          } ${activeSettingsBar === item.title ? "bg-active-bg" : ""}`}
          key={item.id}
          onClick={() => setActiveSettingsBar(item.title)}
        >
          <div
            className={`flex gap-4 items-start ${
              activeSettingsBar === item.title
                ? "border-r-4 border-primary"
                : ""
            }`}
          >
            <span
              className={`mt-2 text-lg ${
                activeSettingsBar === item.title ? "text-primary" : ""
              }`}
            >
              {item.icon}
            </span>
            <div>
              <p
                className={`text-lg ${
                  activeSettingsBar === item.title ? "text-primary" : ""
                }`}
              >
                {item.title}
              </p>
              <p className="text-neutral-300 text-sm">{item.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SettingsBar;

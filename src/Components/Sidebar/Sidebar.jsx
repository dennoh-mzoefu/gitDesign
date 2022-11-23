import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../data/dummy";
import { useDispatch, useSelector } from "react-redux";
import { menuVisible } from "../../redux/actions/uiActions";
import logo from "../../data/git-design-logo.png";
import logo3 from "../../data/git-design-name.png";
import "./Sidebar.css";
import Svg from "../DesignLogo/Git-design-logo";
const Sidebar = () => {
  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifiactiono: false,
  };
  const dispatch = useDispatch();
  const { name } = useParams();
  const { sideBarVisibility } = useSelector((state) => state.sideBarVisibility);
  const { user } = useSelector((state) => state.userReducer);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  // console.log({ sideBarVisibility });
  const handleCloseSideBar = () => {
    if (sideBarVisibility && screenSize <= 900) {
      dispatch(menuVisible(false));
    }
  };
  const closeSideBar = () => {
    dispatch(menuVisible(false));
    // console.log({ sideBarVisibility });
  };
  const homeLink = `/${user}`;
  const activeLink =
    "bg-main-dark-bg flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen overflow-auto pb-10">
      {sideBarVisibility && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={homeLink}
              className="flex items-center p-0 gap-b mt-4  mr-0  text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              onClick={() => handleCloseSideBar}
            >
              <Svg />
              {/* <img className="logo__image" src={logo} alt="logo" /> */}
              {/* <img className="logo__text" src={logo3} alt="logo text" /> */}
            </Link>
            <TooltipComponent content="close" position="BottomCenter">
              <button
                type="button"
                onClick={closeSideBar}
                className="text-xl rounded-full mt-4 p-3 hover:bg-light-gray block "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="">
            {links?.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    onClick={handleCloseSideBar}
                    to={`/${name}/${link.name}`}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

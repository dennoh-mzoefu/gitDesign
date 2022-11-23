import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import Notification from "../Notification/Notification";
import avatar from "../../data/avatar.jpg";
import { menuVisible } from "../../redux/actions/uiActions";
import Notification from "../Notification/Notification";
// import { Cart, Chat, Notification, UserProfile } from ".";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { sideBarVisibility } = useSelector((state) => state.sideBarVisibility);
  const { user, auth } = useSelector((state) => state.userReducer);
  const { notifications } = useSelector((state) => state.notificationReducer);
  const dispatch = useDispatch();
  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(menuVisible(false));
    } else {
      dispatch(menuVisible(true));
    }
  }, [screenSize]);

  const handleActiveMenu = () => {
    dispatch(menuVisible(true));
    // console.log({ sideBarVisibility });
  };
  // let l = notifications.length;
  // console.log({ l });
  const path = "../../../public/images/profiles/";
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <div onClick={handleActiveMenu}>
        <NavButton title="Menu" color="blue" icon={<AiOutlineMenu />} />
      </div>
      {notifications && notifications.length}
      <div className="flex">
        <NavButton
          dotColor="#03C9D7"
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          dotColor="#03C9D7"
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        {auth && (
          <TooltipComponent content="profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <img
                src={`${window.location.origin}/images/profiles/${user.profilePic}`}
                className="rounded-full w-8 h-8"
              />
              <p>
                <span className="text-gray-400 text-14 ">Hi</span>
                {""}
                <span className="text-gray-400 text-14 font-bold  ml-1">
                  {user.name}
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray text-14" />
            </div>
          </TooltipComponent>
        )}
        {/* {isClicked.cart && "Cart"} */}
        {isClicked.chat && "Chat"}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && "UserProfile"}
      </div>
    </div>
  );
};

export default Navbar;

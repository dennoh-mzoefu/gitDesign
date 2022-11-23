import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { Button } from "/Button";
import { chatData } from "../../data/dummy";
import { acceptNotifications } from "../../redux/actions/notificationActions";
import Button from "./Button";
// import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  // const { currentColor } = useStateContext();
  const { notifications } = useSelector((state) => state.notificationReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleClick = (e, projectName, _id) => {
    e.preventDefault();
    const data = {
      _id,
      receiver: user.name,
      projectName,
    };
    dispatch(acceptNotifications(data));
    return;
  };

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          >
            {" "}
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {notifications && notifications.length > 0 ? (
          notifications?.map((item, index) => (
            <div
              key={index}
              className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
            >
              {/* <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            /> */}
              <div>
                <p className="font-semibold dark:text-gray-200">
                  {item.sender} invites you to {item.projectName}
                </p>
                <div>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    {item.projectName}{" "}
                  </p>
                  <button
                    className="bg-stone-500 text-white active:bg-stone-600 font-bold  text-xs px-1 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleClick(e, item.projectName, item._id)}
                  >
                    <small>accept</small>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
        <div className="mt-5">
          {/* <Button
            color="white"
            bgColor="blue"
            text="See all notifications"
            borderRadius="10px"
            width="full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Notification;

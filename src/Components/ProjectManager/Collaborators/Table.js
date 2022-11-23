import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNotifications } from "../../../redux/actions/notificationActions";
import "./style.css";
const Table = ({ data }) => {
  const [invite, setInvite] = useState([]);
  const { project } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  // let item1 = {};
  const inviteUser = (item) => {
    const notification = {
      projectName: project.projectName,
      link: `${user.name}/${project.projectName}`,
      receiver: item.name,
      sender: user.name,
    };
    dispatch(saveNotifications(notification));
    // item1 = item;
    // add a .then method to dispatch
  };

  // useEffect(() => {
  // setInvite((prevState) => [...prevState, item1]);
  // }, [item1]);
  return (
    <div className="whole__table">
      <div className="table">
        <div className="table__table">
          <div>
            <div className="table-header tr">
              <div className="th">pic</div>
              <div className="th">username</div>
              <div className="th">Invite</div>
            </div>
            {data?.map((item, index) => (
              <div key={index} className="table-row tr">
                <div className="td">
                  <img
                    className="table__image"
                    src={`${window.location.origin}/images/profiles/${item.profilePic}`}
                  />
                </div>
                <div className="td">{item.name}</div>
                <div className="td">
                  <button className="table__invite" onClick={inviteUser(item)}>
                    Invite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="invite__list">
        Invited
        {/* {invite && invite?.map((item) => { */}
        <div className="invite__card__image">
          <img
            className="table__image"
            // src={`${window.location.origin}/images/profiles/${item.profilePic}`}
            src={`${window.location.origin}/images/profiles/avatar.jpg`}
          />
        </div>
        ;{/* })} */}
      </div>
    </div>
  );
};

export default Table;

import React from "react";
import { useSelector } from "react-redux";
import Repository from "../Repository/Repository";
import "./style.css";
function Profile() {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div className="profile">
      <aside className="profile-card">
        <header>
          <a target="_blank" href="#">
            <img
              src={`${window.location.origin}/images/profiles/${user.profilePic}`}
              // src="http://lorempixel.com/150/150/people/"
              className="hoverZoomLink"
            />
          </a>
          <h2 className="profile__card__header">Profile Card</h2>
          <h1>{user.name}</h1>
        </header>

        <div className="profile-bio">
          <p>{user.description}</p>
        </div>

        <ul className="profile-social-links">
          <li>
            <a target="_blank" href="https://www.facebook.com/creativedonut">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/dropyourbass">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/vipulsaxena">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.behance.net/vipulsaxena">
              <i className="fa fa-behance"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Profile;

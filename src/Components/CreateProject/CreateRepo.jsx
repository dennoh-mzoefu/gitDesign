import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../redux/actions/projectActions";
import "./Home.css";
import { error } from "../../redux/actions/userActions";
import CreateDesignFile from "./CreateDesignFile/CreateDesignFile";

function CreateRepo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // user from state
  const { user } = useSelector((state) => state.userReducer);
  // form handling with states
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  // form handler function
  const handleClick = (e) => {
    e.preventDefault();
    const project = { projectName, description, ownerName: user.name };
    dispatch(createProject(project))
      .then(() => {
        // JSON.stringify(localStorage.setItem("project", project));
        navigate("/user/projectName/create-design-file");
      })
      .catch((err) => dispatch(error(err)));
  };

  return (
    <div className="whole__create__repo">
      {/* <CreateDesignFile /> */}
      <div className="create__repo">
        <h2>Create a new repository</h2>
        <p className="repo__guidline">
          A repository contains all project files, including the revision
          history.
        </p>
        <form className="create__repo__form">
          <div className="owner__repo__name">
            <div>
              <p className="input__desc">Owner: </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
                value={user.name}
              />
            </div>
            <h2 className="repo__divider">/</h2>
            <div>
              <p className="input__desc">Repo name: </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
          </div>
          <p className="input__desc">Description about repo: </p>
          <input
            className="create__repo__input"
            type="text"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="div__btn__form">
            <button
              className="upload__file__btn"
              type="submit"
              onClick={handleClick}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRepo;

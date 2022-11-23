import React from "react";
import { useSelector } from "react-redux";
import { GoPrimitiveDot } from "react-icons/go";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

function Repositories() {
  const { projects } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  let dateString = "";
  const handleDate = (d) => {
    var n = Date.parse(d);
    n = Number(n); // cast it to a Number
    var date = new Date(n);
    date = JSON.stringify(date);
    // console.log(date.slice(0, 20));
    dateString = date.slice(1, 10);
  };
  return (
    <div className="repositories">
      {projects &&
        projects?.map((project, index) => {
          return (
            <div className="project__card" key={index}>
              {/* project name */}
              <div className="project__name">
                <h3>
                  <b>Project Name: </b>
                </h3>
                &#160;&#160;
                <p>{project.projectName}</p>
              </div>
              {/* description. */}
              <div className="description">
                About Project: &#160;&#160;{project.description}
              </div>
              {/* date created  */}
              <div className="date__created" onLoad={handleDate(project.date)}>
                <p>
                  <GoPrimitiveDot className="icon" />
                  <small>Date created:&#160;&#160; {dateString}</small>
                </p>
                <NavLink to={`/${user.name}/${project.projectName}`}>
                  {/* <Link to={project.projectName}> */}
                  <button>
                    <small>more</small>
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Repositories;

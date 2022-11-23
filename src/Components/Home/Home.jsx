import React, { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { GrDocumentStore } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
// import CreateRepo from "./CreateRepo";
import Overview from "./Overview";
import Repositories from "./Repositories";
import "./Home.css";

function Home() {
  const [homeNavBtn, setHomeNavBtn] = useState("overview");

  const activeLink = "rgba(110, 110, 202, 0.55)";
  return (
    <div className="app">
      <div className="home__navbar">
        <div
          className="home__link__nav"
          style={{
            borderBottom:
              homeNavBtn === "overview"
                ? "solid rgba(110, 110, 202, 0.55)"
                : "none",
          }}
          onClick={() => setHomeNavBtn("overview")}
        >
          <FiBookOpen />
          <p>Overview</p>
        </div>
        <div
          className="home__link__nav"
          style={{
            borderBottom:
              homeNavBtn === "repositories"
                ? "solid rgba(110, 110, 202, 0.55)"
                : "none",
          }}
          onClick={() => setHomeNavBtn("repositories")}
        >
          <GrDocumentStore />
          <p>Repositories</p>
        </div>
        {/* <div
          className="home__link__nav"
          style={{
            borderBottom:
              homeNavBtn === "createRepo"
                ? "solid rgba(110, 110, 202, 0.55)"
                : "none",
          }}
          onClick={() => setHomeNavBtn("createRepo")}
        >
          <AiOutlineAppstoreAdd />
          <p>Create Repo</p>
        </div> */}
      </div>
      {homeNavBtn === "overview" && <Overview />}
      {homeNavBtn === "repositories" && <Repositories />}
      {/* {homeNavBtn === "createRepo" && <CreateRepo />} */}
    </div>
  );
}

export default Home;

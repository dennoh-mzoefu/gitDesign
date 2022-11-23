import React, { Fragment, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./Home.css";
import { useSelector } from "react-redux";
import { useParams, useResolvedPath } from "react-router-dom";

function Overview() {
  const { user } = useParams();
  const { design__files } = useSelector((state) => state.designFileReducer);

  let dateString = "";
  const handleDate = (d) => {
    var n = Date.parse(d);
    n = Number(n); // cast it to a Number
    var date = new Date(n);
    date = JSON.stringify(date);
    // console.log(date.slice(0, 20));
    dateString = date.slice(0, 10) + " " + date.slice(15, 20);
  };
  const handleSrc = (url) => {
    const path = `./images/thumbnail/${url}.png`;
    return path.toString();
  };
  return (
    <div className="overview">
      {design__files &&
        design__files?.map((file, index) => {
          return (
            <Fragment key={index}>
              <div className="repo" onLoad={handleDate(file.lastModified)}>
                {/* {console.log(handleSrc(file?.thumbnailUrl))} */}

                <img
                  alt="repo thumbnail"
                  src={`${window.location.origin}/images/thumbnail/${file.thumbnailUrl}.png`}
                  // src={require("./images/thumbnail/1665215824439.png")}
                />

                <div className="repo__icons">
                  <span>
                    <FaEye />
                    <p>200</p>
                  </span>
                  <span>
                    <FaRegCommentDots />
                    <p>56</p>
                  </span>
                </div>
                <div className="repo__desc">
                  <p>{file?.description}</p>
                </div>
                <div className="repo__desc">
                  <p>last modified: {dateString}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}

export default Overview;

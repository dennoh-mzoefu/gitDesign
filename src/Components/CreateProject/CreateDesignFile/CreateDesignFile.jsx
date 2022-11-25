import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { createProject } from "../../../redux/actions/projectActions";
import { error } from "../../../redux/actions/userActions";
import { createDesignFile } from "../../../redux/actions/designFileActions";
import { BsCloudUploadFill } from "react-icons/bs";

function CreateDesignFile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // user from state
  const { project } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  // form handling with states
  const [fileName, setFileName] = useState("");
  const [figmaId, setFigmaId] = useState("");
  const [description, setDescription] = useState("");
  const [figmaApiKey, setFigmaApiKey] = useState(
    "figd_-5wK1DvxUHrOPQJn0wu6jxnwbDhnbmnG2Yuh8biM"
  );
  // form handler function
  const handleClick = async (e) => {
    e.preventDefault();
    let result = await fetch(`https://api.figma.com/v1/files/${figmaId}`, {
      method: "GET",
      headers: {
        "X-Figma-Token": figmaApiKey,
      },
    });
    let figmaTreeStructure = await result.json();
    // console.log("figmaTreeStructure");
    var thumbnailUrl = figmaTreeStructure.thumbnailUrl;
    var lastModified = figmaTreeStructure.lastModified;
    //   return figmaTreeStructure;

    // added code

    let children = figmaTreeStructure.document?.children.map((frame) => {
      return {
        name: frame.name,
        id: frame.id,
      };
    });
    let ids = children.map((ethmoji) => ethmoji.id).join(",");

    let imageResult = await fetch(
      `https://api.figma.com/v1/images/${figmaId}?scale=2&ids=${ids}`,
      {
        method: "GET",
        headers: {
          "X-Figma-Token": figmaApiKey,
        },
      }
    );
    let figmaImages = await imageResult.json();
    figmaImages = figmaImages.images;
    var fileUrl;
    children.reduce(async function (map, ethmoji) {
      map[ethmoji.name] = await figmaImages[ethmoji.id];
      fileUrl = map;

      // return { fileUrl, thumbnailUrl, lastModified };
      // console.log(map);
    }, {});
    // console.log(fileUrl);
    // console.log(lastModified);
    const designFile = {
      figmaId,
      fileName,
      description,
      figmaApiKey,
      projectName: "trial",
      ownerName: user?.name,
      lastModified,
      thumbnailUrl,
    };
    console.log(designFile);
    // designFile = JSON.stringify(designFile);
    // dispatch(createDesignFile(JSON.parse(designFile)))
    dispatch(createDesignFile(designFile))
      .then(() => {
        JSON.stringify(localStorage.setItem("designFile", designFile));
        navigate("/doe/home");
      })
      .catch((err) => dispatch(error(err)));
  };

  return (
    <div className="whole__create__repo">
      <div className="uploadFile">
        <div className="custome-file">
          <div>
            <BsCloudUploadFill className=" fa-upload " aria-hidden="true" />
            Upload Design
          </div>
          <input type="file" />
        </div>
      </div>
      <h4 className="or">OR</h4>
      <div className="create__repo">
        <h2>Upload a design file through figma</h2>
        <p className="repo__guidline">{project?.projectName}</p>
        <form className="create__repo__form">
          <div className="owner__repo__name">
            <div>
              <p className="input__desc">File Url </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
                value={figmaId}
                onChange={(e) => setFigmaId(e.target.value)}
              />
            </div>

            <div>
              <p className="input__desc">File Name: </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
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
          <p className="input__desc">Figma Api Key: </p>
          <input
            className="create__repo__input"
            type="text"
            placeholder=""
            value={figmaApiKey}
            onChange={(e) => setFigmaApiKey(e.target.value)}
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

export default CreateDesignFile;
// Nv8nCYDQKjipTrdHHXXsen
// open fashion landing page
// figd_-5wK1DvxUHrOPQJn0wu6jxnwbDhnbmnG2Yuh8biM
// open fashion

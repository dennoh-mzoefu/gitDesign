import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateDesignFile from "../../CreateProject/CreateDesignFile/CreateDesignFile";
import "./style.css";
import { BsCloudUploadFill } from "react-icons/bs";

function DesignFiles({ project }) {
  const [display, setDisplay] = useState(false);
  const [file, setFile] = useState("");
  const { name, projectName } = useParams();
  const { design__files } = useSelector((state) => state.designFileReducer);
  console.log(design__files);
  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay((prevDisplay) => !prevDisplay);
  };
  const handleUpload = (e) => {
    e.preventDefault();
  };
  return (
    <div className="design__files">
      <div className="add__file">
        <h4 className="h4__add__file" onClick={(e) => handleDisplay(e)}>
          Click To Add File
        </h4>
        {display && <CreateDesignFile />}
      </div>
      {design__files &&
        design__files?.map((file, index) => {
          return (
            <Fragment key={index}>
              <div className="repo">
                {console.log({ file })}
                <img
                  alt="repo thumbnail"
                  src={`${window.location.origin}/images/thumbnail/${file.thumbnailUrl}.png`}
                />
                <div className="lower__desc">
                  <div className="repo__desc">
                    <p>{file?.fileName}</p>
                  </div>
                  <div className="repo__desc repo__btn">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0].name)}
                      placeholder="Update Versions"
                    />
                    <BsCloudUploadFill
                      className="upload"
                      onClick={(e) => handleUpload(e)}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}

export default DesignFiles;

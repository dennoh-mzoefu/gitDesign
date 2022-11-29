import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateDesignFile from "../../CreateProject/CreateDesignFile/CreateDesignFile";
import "./style.css";
import { BsCloudUploadFill } from "react-icons/bs";
// import Versions from "./Versions/Difference";
import {
  createVersion,
  fetchVersions,
} from "../../../redux/actions/versionActions";
import AboveVersions from "./Versions/AboveVersions";

function DesignFiles({ project }) {
  const [display, setDisplay] = useState(false);
  const [version, setVersion] = useState(true);
  const [fille, setFile] = useState("");
  const { name, projectName } = useParams();
  const { design__files } = useSelector((state) => state.designFileReducer);
  // const { project } = useSelector((state) => state.projectReducer);
  const { versionNumber } = useSelector((state) => state.versionReducer);
  const dispatch = useDispatch();
  // console.log(design__files);
  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay((prevDisplay) => !prevDisplay);
  };
  const handleVersions = (e) => {
    e.preventDefault();
    setVersion((prevVersion) => !prevVersion);
  };

  const handleUpload = (e, file) => {
    e.preventDefault();
    const versionFile = {
      version: versionNumber,
      fileName: fille,
      designFile: file.fileName.trim(),
      difference: file.fileName.trim(),
    };
    // console.log({ versionFile });
    dispatch(createVersion(versionFile));
  };
  // useEffect(() => {
  //   project && dispatch(fetchVersions(project.projectName));
  // }, [project]);
  return (
    <div className="design__files">
      <div className="add__file">
        <h1>{project.projectName}</h1>
        <h4 className="h4__add__file" onClick={(e) => handleDisplay(e)}>
          Click To Add File
        </h4>
        {display && <CreateDesignFile />}
      </div>
      {project &&
        design__files &&
        design__files?.map((file, index) => {
          return (
            <Fragment key={index}>
              <div>
                <h3>{file.fileName}</h3>
                <div className="above__repo">
                  <div className="repo">
                    {/* {console.log({ file })} */}
                    <img
                      alt="repo thumbnail"
                      src={`${window.location.origin}/images/thumbnail/${file.thumbnailUrl}.png`}
                    />
                    <div className="lower__desc">
                      {/* <div className="repo__desc">
                      <p>{file?.fileName}</p>
                    </div> */}
                      <div className="side__btn">
                        <h4
                          className="h4__add__file"
                          onClick={(e) => handleVersions(e)}
                        >
                          Versions
                        </h4>
                      </div>
                      <div className="repo__desc repo__btn">
                        <input
                          type="file"
                          onChange={(e) => setFile(e.target.files[0].name)}
                          placeholder="Update Versions"
                        />
                        <BsCloudUploadFill
                          className="upload"
                          onClick={(e) => handleUpload(e, file)}
                        />
                      </div>
                    </div>
                  </div>
                  {version && (
                    <div className="version__design">
                      <AboveVersions designFile={file.fileName} />
                    </div>
                  )}
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}

export default DesignFiles;

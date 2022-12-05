import React, { useState } from "react";
import { BiGitCompare } from "react-icons/bi";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import "./style.css";
import { figmaLinks } from "../dummy";
function Versions({ setVersion }) {
  const { versions } = useSelector((state) => state.versionReducer);
  const [display, setDisplay] = useState(false);
  console.log({ versions });
  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay((prevDisplay) => !prevDisplay);
  };
  const handleVersion = (e) => {
    setVersion((prevVersion) => !prevVersion);
  };
  return (
    <div className="version__container">
      {/* hello againa agiamn */}
      {versions &&
        versions?.map((version, index) => {
          return (
            <div className="version__div" key={index}>
              <div className="version__left">
                <img
                  className="version__image"
                  src={`${window.location.origin}/images/file/files/${version.fileName}`}
                />
                <div className="bottom__version">
                  <MdKeyboardBackspace
                    className="faedit"
                    onClick={(e) => handleVersion(e)}
                  />
                  <a
                  target="_blank" href={figmaLinks[index].link}>
                    {" "}
                    <p className="figma__links">
                      Figma <FaEdit className="faedit" />
                    </p>
                  </a>
                  <p>Version {index + 1}</p>
                  <div>
                    {index !== 0 && (
                      <BiGitCompare
                        onClick={(e) => handleDisplay(e)}
                        className="faedit compare"
                      />
                    )}
                    {index === 0 && (
                      <p
                        // onClick={(e) => handleDisplay(e)}
                        className=" compare_0"
                      ></p>
                    )}
                  </div>
                </div>
              </div>

              {index !== 0 && display && (
                <div className="version__right">
                  <img
                    className="version__image"
                    src={`${window.location.origin}/images/file/differences/${version.fileName}`}
                  />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Versions;

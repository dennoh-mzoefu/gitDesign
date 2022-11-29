import React from "react";
import { BiGitCompare } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./style.css";
function Versions() {
  const { versions } = useSelector((state) => state.versionReducer);
  console.log({ versions });
  return (
    <div className="version__container">
      {/* hello againa agiamn */}
      {versions &&
        versions?.map((version, index) => {
          return (
            <div className="version__div" key={index}>
              <img
                className="version__image"
                src={`${window.location.origin}/images/file/files/${version.fileName}`}
              />
              {index !== 0 && <BiGitCompare className="compare" />}
              {index === 0 && <BiGitCompare className="compare__0" />}
              {index !== 0 && (
                <img
                  className="version__image"
                  src={`${window.location.origin}/images/file/differences/${version.fileName}`}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Versions;

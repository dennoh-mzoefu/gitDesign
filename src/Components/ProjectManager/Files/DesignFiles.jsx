import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";

function DesignFiles({ project }) {
  const { name, projectName } = useParams();
  const { design__files } = useSelector((state) => state.designFileReducer);
  console.log(design__files);
  return (
    <div>
      {design__files &&
        design__files?.map((file, index) => {
          return <div key={index}>hello</div>;
        })}
    </div>
  );
}

export default DesignFiles;

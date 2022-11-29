import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProjectManager from "./ProjectManager";
import { getProject } from "../../redux/actions/projectActions";

function AboveProjectManager() {
  const { projectName } = useParams();
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      projectName,
      ownerName: user.name,
    };
    projectName && dispatch(getProject(projectName));
    // console.log({ project });
  }, [projectName]);
  return (
    <div>
      <ProjectManager />
    </div>
  );
}

export default AboveProjectManager;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVersions } from "../../../../redux/actions/versionActions";
import Versions from "./Versions";

function AboveVersions({ designFile, setVersion }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVersions(designFile));
  }, [designFile]);
  return (
    <div>
      <Versions setVersion={setVersion} />
    </div>
  );
}

export default AboveVersions;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVersions } from "../../../../redux/actions/versionActions";
import Versions from "./Versions";

function AboveVersions({ designFile }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVersions(designFile));
  }, [designFile]);
  return (
    <div>
      <Versions />
    </div>
  );
}

export default AboveVersions;

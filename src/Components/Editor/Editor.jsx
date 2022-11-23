import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import ScriptComponent from "./ScriptComponent";
import "./style.css";
// import "./main";

function Editor() {
  const [file, setFile] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    file && console.log("caman");
  }, [file]);

  const handleChange = (e) => {
    setFile(e.target.files[0].name);
    console.log({ file });
  };
  return (
    <div>
      <iframe
        width="1100"
        height="600"
        src="/image-editor/editor-index.html"
        title="image editor"
      ></iframe>
      {/* <Helmet>
        <script type="text/javascript" src="/main.js" defer />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"
          integrity="sha512-JjFeUD2H//RHt+DjVf1BTuy1X5ZPtMl0svQ3RopX641DWoSilJ89LsFGq4Sw/6BSBfULqUW/CfnVopV5CfvRXA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <div className="editor__container">
        <div className="custom-file mb-3">
          <input
            type="file"
            onChange={(e) => handleChange(e)}
            className="file__input"
            id="upload-file"
          />
          

        </div>
        <canvas id="canvas"></canvas>

        <h5 className="text-center my-3">Filters</h5>

        <div className="row my-4 filter text-center">
          <div className="col-md-3">
            <div className="btn-group btn-group-sm">
              <button className="filter-btn brightness-remove btn btn-info">
                -
              </button>
              <button className="btn btn-secondary btn-disabled" disabled>
                Brightness
              </button>
              <button className="filter-btn brightness-add btn btn-info">
                +
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="btn-group btn-group-sm">
              <button className="filter-btn contrast-remove btn btn-info">
                -
              </button>
              <button className="btn btn-secondary btn-disabled" disabled>
                Contrast
              </button>
              <button className="filter-btn contrast-add btn btn-info">
                +
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="btn-group btn-group-sm">
              <button className="filter-btn saturation-remove btn btn-info">
                -
              </button>
              <button className="btn btn-secondary btn-disabled" disabled>
                Saturation
              </button>
              <button className="filter-btn saturation-add btn btn-info">
                +
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="btn-group btn-group-sm">
              <button className="filter-btn vibrance-remove btn btn-info">
                -
              </button>
              <button className="btn btn-secondary btn-disabled" disabled>
                Vibrance
              </button>
              <button className="filter-btn vibrance-add btn btn-info">
                +
              </button>
            </div>
          </div>
        </div>

        <h4 className="text-center my-3">Effects</h4>

        <div className="row effects mb-3">
          <div className="col-md-3">
            <button className="filter-btn vintage-add btn btn-dark btn-block">
              Vintage
            </button>
          </div>
          <div className="col-md-3">
            <button className="filter-btn lomo-add btn btn-dark btn-block">
              Lomo
            </button>
          </div>
          <div className="col-md-3">
            <button className="filter-btn clarity-add btn btn-dark btn-block">
              Clarity
            </button>
          </div>
          <div className="col-md-3">
            <button className="filter-btn sincity-add btn btn-dark btn-block">
              Sin City
            </button>
          </div>
        </div>

        <div className="row effects">
          <div className="col-md-3">
            <button className="filter-btn crossprocess-add btn btn-dark btn-block">
              Cross Process
            </button>
          </div>
          <div className="col-md-3">
            <button className="filter-btn pinhole-add btn btn-dark btn-block">
              Pinhole
            </button>
          </div>
          <div className="col-md-3">
            <button className="filter-btn nostalgia-add btn btn-dark btn-block">
              Nostalgia
            </button>
          </div>
          <div className="col-md-3">
            <button className="filter-btn hermajesty-add btn btn-dark btn-block">
              Her Majesty
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <button id="download-btn" className="btn btn-primary btn-block">
              Download Image
            </button>
          </div>
          <div className="col-md-6">
            <button id="revert-btn" className="btn btn-danger btn-block">
              Remove Filters
            </button>
          </div>
        </div>
      </div> */}
      {/* {file && <ScriptComponent />} */}
      {/* <script type="text/javascript" src="main.js"></script> */}
    </div>
  );
}
export default Editor;

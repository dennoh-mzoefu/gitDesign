import React from "react";
import "./style.css";

function Difference() {
  return (
    <div className="versions">
      <div className="section full-height">
        <input
          className="modal-btn"
          type="checkbox"
          id="modal-btn"
          name="modal-btn"
        />
        {/* <label for="modal-btn">
          Open Modal <i className="uil uil-expand-arrows"></i>
        </label> */}
        <div className="modal">
          <div className="modal-wrap">
            <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>

        {/* <a href="https://front.codes/" className="logo" target="_blank">
          <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
        </a> */}
      </div>
    </div>
  );
}

export default Difference;

import React from "react";
import "./style.css";

function Versions() {
  return (
    <div className="versions">
      <div class="section full-height">
        <input
          class="modal-btn"
          type="checkbox"
          id="modal-btn"
          name="modal-btn"
        />
        <label for="modal-btn">
          Open Modal <i class="uil uil-expand-arrows"></i>
        </label>
        <div class="modal">
          <div class="modal-wrap">
            <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>

        {/* <a href="https://front.codes/" class="logo" target="_blank">
          <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
        </a> */}
      </div>
    </div>
  );
}

export default Versions;

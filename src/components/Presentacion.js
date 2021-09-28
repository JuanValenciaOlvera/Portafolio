import React from "react";

export const Presentacion = () => {
  return (
    <div
      className="presentacion animate__animated animate__backInRight animate__slow 	2s"
      id="home"
    >
      <div className="presentacion__text">
        <p className="presentacion__principal">
          Mi nombre es,<strong>Juan Valencia</strong> <br /> un{" "}
          <strong>ingeniero en TI.</strong>
        </p>
        <p className="presentacion__sec">
          Siempre me ha gustado la tecnología pero el día que descubrí la
          programación y el frontend me enamore.
        </p>
      </div>

      <div className="presentacion__img">
        <img src="./assets/img/retrato (2).jpg" alt="img_retrato" />
      </div>
    </div>
  );
};

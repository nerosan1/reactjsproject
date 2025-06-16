import React from "react";
import "./Button.css";
function Button({ name, alert }) {
  return (
    <div className="button" onClick={() => alert(name)}>
      Buton
    </div>
  );
}

export default Button;

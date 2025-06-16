import React from "react";
import "./Header.css";
import Button from "./Button";
function Header() {
  const data = [
    "nguyen van thang",
    "nguyen van thanh",
    "le tan tap",
    "ho phuong dung",
  ];

  const alert = (name) => {
    console.log(name);
  };
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="type name" />

        <ul>
          {data.map((name, index) => (
            <>
              <li key={index}>{name}</li>
              <Button alert={alert} name={name} />
            </>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Header;

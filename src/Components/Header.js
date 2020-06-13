import React from "react";

const Header = () => {
  return (
    <div>
      <h1
        style={{
          backgroundImage: "linear-gradient(to right,#ff7e5f,#feb47b)",
          padding: "10px",
          color: "white",
          borderRadius: "5px",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          fontSize: "3rem",
        }}
      >
        Task Manager
      </h1>
    </div>
  );
};

export default Header;

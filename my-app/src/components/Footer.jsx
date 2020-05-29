import React from "react";

const date = new Date();
const copyRightYear = date.getFullYear();

const Footer = () => {
  return (
    <div>
      <p>{`Copyright ${copyRightYear}`}</p>
    </div>
  );
};

export default Footer;

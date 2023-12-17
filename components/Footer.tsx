import Image from "next/image";
import ExpanzoLogo from "@public/assets/images/logo-expanzo-black.svg";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Image src={ExpanzoLogo} alt="EPANZO LOGO" />
      </div>
      <div className="footer-right">
        <p>contacts</p>
        <p>phones</p>
        <p>top search</p>
      </div>
    </div>
  );
};

export default Footer;

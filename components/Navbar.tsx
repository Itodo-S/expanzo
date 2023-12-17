import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ExpanzoLogo from "@public/assets/images/logo-expanzo.svg";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  contact?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ contact }) => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-left">
          <div className="w-6 h-7 cursor-pointer">
            <FontAwesomeIcon icon={faBars} color="#00c39a" fontSize={12} />
          </div>

          <ul className="nav-ul">
            <li className="ul-item">
              <Link href={"/"}>dashboard</Link>
            </li>
            <li className="ul-item">
              <Link href={"/contact"}>contact</Link>
            </li>
          </ul>
        </div>

        {contact && (
          <div>
            <Image height={35} src={ExpanzoLogo} alt="EXPANZO LOGO" />
          </div>
        )}

        <div className="nav-right">
          <ul className="nav-ul">
            <li className="li-right">
              <div className="nav-icon">
                <i className="fa fa-user"></i>
              </div>
              <p>login</p>
            </li>
            <li className="li-right">
              <div className="nav-icon">
                <i className="fa-solid fa-pen"></i>
              </div>
              <p>registration</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

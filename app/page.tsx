import Image from "next/image";
import ExpanzoLogo from "@public/assets/images/logo-expanzo-black.svg";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Image src={ExpanzoLogo} alt="EXPANZO LOGO" className="home-logo" />

        <div className="home-tabs">
          <div className="active-tab">
            <p>all</p>
          </div>
          <div className="tab">
            <p>companies</p>
          </div>
          <div className="tab">
            <p>phones</p>
          </div>
        </div>
      </div>
    </>
  );
}

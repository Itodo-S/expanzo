import Navbar from "@components/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar contact />
      <div className="contact">
        <p className="cantact-title">Contact</p>

        <div className="flex w-[500px]">
          <div className="flex-1 flex text-left gap-2 font-medium">
            <i className="fa-solid fa-location-dot text-lg text-[#00c39a]"></i>
            Headquarters
          </div>
          <div className="flex-1 flex justify-end text-right gap-2 font-medium">
            <i className="fa-solid fa-envelope text-lg text-[#00c39a]"></i>
            Email
          </div>
        </div>

        <div className="flex w-[500px] mt-6">
          <div className="flex-1 items-center flex text-left gap-2">
            DHO s.r.o <br />
            Borivojova 878/35 <br />
            130 00 Praha 3
          </div>
          <div className="flex-1 justify-end flex text-right gap-2">
            info@gmail.com
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

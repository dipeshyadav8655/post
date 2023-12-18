import React from "react";
import UserIcon from "../Assets/user icon.svg";
import SearchIcon from '../Assets/Icon feather-search.svg';
import MessagesIcon from '../Assets/speech-bubble-black-icon.svg';
function Header() {
  return (
    <div className="m-5">
      <div className="flex items-center justify-between">
        <div className="w-fit p-3 bg-[#F0F0F0] rounded-full">
          <img src={UserIcon} alt="UserLogo" />
        </div>
        <div className="flex items-center justify-center w-fit p-2 gap-2 bg-[#F0F0F0] rounded-xl">
          <img src={SearchIcon} alt="Search Icon" />
          <input type="text" placeholder="Search" className="w-[35vw] bg-[#F0F0F0] outline-none h-[5vw] px-3" />
        </div>
        <div>
          <img src={MessagesIcon} alt="Message Icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;

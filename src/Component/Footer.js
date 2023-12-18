import React from "react";
import HomeIcon from '../Assets/HomeIcon.svg';
import NetworksIcon from '../Assets/NetworksIcon.svg';
import PostsIcons from '../Assets/PostIcon.svg';
import NotificationIcon from '../Assets/NotificationIcon.svg';
import JobsIcon from '../Assets/JobsIcon.svg';

function Footer() {
  return (
    <div className="absolute w-full bottom-[-70px] border h-fit flex justify-evenly py-2">
      <img src={HomeIcon} alt="Home" />
      <img src={NetworksIcon} alt="Home" />
      <img src={PostsIcons} alt="Home" />
      <img src={NotificationIcon} alt="Home" />
      <img src={JobsIcon} alt="Home" />
    </div>
  );
}

export default Footer;

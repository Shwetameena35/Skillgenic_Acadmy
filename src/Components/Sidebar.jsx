import React from 'react';
import { FaBusinessTime } from "react-icons/fa"; 
import { GoAlertFill } from "react-icons/go"; 
import { RiShoppingBagFill } from "react-icons/ri"; 
import { GoChecklist } from "react-icons/go"; 
import { LuFolderCog } from "react-icons/lu"; 
import { IoBagAdd } from "react-icons/io5"; 
import { GiTeacher } from "react-icons/gi"; 
import { IoMdNotificationsOutline } from "react-icons/io"; 
import { HiOutlineAcademicCap } from "react-icons/hi2"; 
import Card from './Card'; 
import { IoMdArrowDropright } from "react-icons/io";
const Sidebar = () => {
  const iconData = [
    { icon: <FaBusinessTime /> }, 
    { icon: <GoAlertFill /> },
    
    { icon: <RiShoppingBagFill /> }, 
    { icon: <GoChecklist /> }, 
    { icon: <LuFolderCog /> }, 
    { icon: <IoBagAdd /> }, 
    { icon: <GiTeacher /> },
    { icon: <IoMdNotificationsOutline /> }, 
    { icon: <HiOutlineAcademicCap /> }, 
  ];

  return (
    <div className="flex w-16 h-dvh bg-white shadow-md absolute">
      <div className="flex w-full flex-col gap-4 items-center ">
        <div className="">👋</div>
        <div className="w-5 h-5 rounded-2xl bg-slate-200 flex items-center ml-16">
          <IoMdArrowDropright />
        </div>

        <div className="container cursor-pointer">
          {iconData.map((card) => (
            <Card key={card.icon} {...card} gap={20}/> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

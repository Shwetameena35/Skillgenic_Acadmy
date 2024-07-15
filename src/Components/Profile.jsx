import React, {useState} from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { IoDiamondOutline } from "react-icons/io5";
import profile_pic from "./images/profilepic.png";
import Description from "./Description";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import vector1 from "./images/Vector1.png"
import { CiSearch } from "react-icons/ci";
import LastSection from "./LastSection";
import { FaCheckDouble } from "react-icons/fa";
export default function LeftSideBar() {
 
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  const profiles = [
    {
      image: img1,
      name: "Kimeya",
      title: "AI Coordinator",
      price: "RS 399 per session",
    },
    {
      image: img2,
      name: "Kimeya",
      title: "AI Coordinator",
      price: "RS 399 per session",
    },
    {
      image: img3,
      name: "Kimeya",
      title: "Skill Gap Analys",
      price: "RS 399 per session",
    },
    {
      image: img4,
      name: "Kimeya",
      title: "Mock Interview",
      price: "RS 399 per session",
    },
  ];
  

  return (
    <>
      <div className="w-3/4">
        <div className="h-80 bg-white mt-5 ml-20 rounded-md">
          <div className="flex flex-col">
            <div className="min-h-7 flex items-center ml-36 mt-2">
             
              <img  className="text-xl mr-3 "  src={vector1} alt="" />
              <h1 className="font-semibold ">Step into the future</h1>
            </div>
            <div className="flex ml-8 mt-4">
              <div className="flex items-center justify-center gap-5 w-28 h-24 my-8">
                <img className="rounded-full " src={profile_pic} alt="Logo" />
              </div>

              <div className="flex flex-wrap">
                {profiles.map((profile) => (
                  <Description key={profile.image} {...profile} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProgressBar
            className="w-96 ml-64 -mt-7 text-sm"
            style={{
              height: "6px",
              backgroundColor: " rgba(66, 52, 162, 1)",
              marginLeft: "290px",
            }}
            now={0}
            label={`${0}%`}
            visuallyHidden
          />
        </div>

        <div
          className="bg-white mt-16 ml-20 rounded-md p-4"
        >
          <div className="flex flex-col gap-6 w-full h-16 justify-center items-center align-middle">
            <div className="flex flex-row gap-6   ">
              <p className="hover:text-violet-500 cursor-pointer font-semibold">All Jobs</p>
              <p className="hover:text-violet-500 cursor-pointer ">My Jobs</p>
              <p className="hover:text-violet-500 cursor-pointer ">My Interview</p>
            </div>
            <div>
              <ProgressBar
                className="w-96 -mt-2"
                style={{
                  height: "3px",
                }}
                now={20}
                label={`${20}%`}
                visuallyHidden
              />
            </div>
          </div>

          <div className="p-4 flex ">
        
            <CiSearch className="my-0 bg-gray-100 h-8" />
            <input
              
              className="w-full h-8 bg-neutral-100 p-3 rounded-md"
              type="text"
              placeholder="Search Opportunities" 
              
            />

            <p className="-ml-20 font-semibold text-violet-600 mt-1 hover:cursor-pointer hover:text-black">View all</p>
          </div>

          <LastSection/>
        </div>
      </div>


     <div className="offer">
      <div  style={{
        background: `linear-gradient(to right, rgba(15, 135, 179, 1), rgba(70, 45, 161, 1))`,
      }} className="w-96 h-80 gap-3 ml-6 rounded-3xl  mt-5">
        <div className="first flex-col text-center items-center ">
         <IoDiamondOutline className="w-15 h-12 ml-44 text-white" />
      <p className="text-white font-bold">Unleash your Career</p>
      <p  className="text-white font-bold">Potential</p>
      <p  className="text-white font-poppins text-sm">Premium Career Solutions</p>
      </div>
      <div className="second mt-3 flex-col ">
     <div className="second1 flex gap-4 mt-3">
       <div className="details1 flex gap-2 text-white  font-20 ml-3 hover:underline hover:cursor-pointer ">
       <FaCheckDouble />
       Al Career Counselor
       </div>
       <div className="details2 flex gap-2 text-white hover:underline hover:cursor-pointer ">
       <FaCheckDouble />
       Al Resume Bulider
       </div>
     </div>
     <div className="second2 flex gap-14 mt-4">
       <div className="details1 flex gap-2 text-white  font-20 ml-3 hover:underline hover:cursor-pointer ">
       <FaCheckDouble />
       Mock interview
       </div>
       <div className="details2 flex gap-2 text-white hover:underline hover:cursor-pointer ">
       <FaCheckDouble />
       Jump the Queue
       </div>
     </div>
     <div className="second3 flex gap-14 mt-4">
       <div className="details1 flex gap-2 text-white  font-20 ml-3 hover:underline hover:cursor-pointer ">
       <FaCheckDouble />
       Skill Gap Analysis
       </div>
       <div className="details2 flex gap-2 text-white hover:underline hover:cursor-pointer ">
       <FaCheckDouble />
       Skills trainer
       </div>
     </div>
      </div>
      <button
      className={`
        bg-white text-black w-64 ml-14 font-bold rounded-md mt-2 p-3
        ${isClicked ? 'bg-blue-500 text-violet-500 hover:bg-blue-700' : ''}
      `}
      onClick={handleClick}
    >
      {isClicked ? 'Learned More' : 'Learn More'}
    </button>
      </div>
    
     </div>
    </>
  );
}

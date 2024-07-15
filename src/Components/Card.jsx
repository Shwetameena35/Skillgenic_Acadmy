import React from "react";

function Card(props) {
  const { icon} = props; // Destructure props

  return (
    <div className="card gap-1">
      <div className="icon-header bg-white border-none p-2 ">
        {icon}  
       
      </div>
      
    </div>
  );
}


export default Card;

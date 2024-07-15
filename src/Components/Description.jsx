import React from "react";

const Description = ({ image, name, title, price }) => {
  if (!image || !name || !title || !price) {
    return <div>Error: Missing required props for Description component.</div>;
  }

  return (
    <>
      <div className="flex w-28 h-20 ml-16 flex-col justify-center items-center mt-5 ">
        <img className="rounded" src={image} alt={name} />
        <p style={{ fontSize: "15px" }} className="font-bold">{name}</p>
        <p className="text-sm font-semibold">{title}</p>
        <button
          style={{
            fontSize: "8px",
            background: `linear-gradient(to right, rgba(15, 135, 179, 1), rgba(70, 45, 161, 1)`,
            color: "white", 
            padding: "5px 10px", 
            borderRadius: "4px",
          }}
          className="h-7 flex items-center text-xs bg-blue-900 mt-2"
        >
          {price}
        </button>
      </div>
    </>
  );
};

export default Description;

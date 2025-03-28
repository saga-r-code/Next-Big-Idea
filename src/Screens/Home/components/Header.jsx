import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleGoToNewIdeaPage = () => {
    navigate("/new-idea");
  };
  return (
    <>
      <div className="flex flex-col  gap-1 ">
        <h2 className="text-2xl md:text-3xl font-bold text-nowrap">
          Next Big Idea 🚀💡
        </h2>
        <h2 className=" text-sm  font-bold ">Made By Sagar Shah</h2>
      </div>
      <button onClick={handleGoToNewIdeaPage} className="mt-5 sm:mt-0 float-right btn  btn-accent rounded-full  outline-dashed ">
        + Create New Idea
      </button>
    </>
  );
};

export default Header;

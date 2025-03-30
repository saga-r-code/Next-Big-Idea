import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleGoToNewIdeaPage = () => {
    navigate("/new-idea");
  };
  return (
    <>
      <div className="flex flex-col  gap-1 ">
        <h2 className="text-2xl inline-flex gap-2 md:text-3xl font-bold text-nowrap ">
          <p className="text-gradient"> Next Big Idea</p> 🚀💡
        </h2>
        <h2 className=" text-sm  font-bold ">
          Made By{" "}
          <Link
            to="https://github.com/saga-r-code"
            target="_blank"
            className="underline"
          >
            Sagar Shah
          </Link>
        </h2>
      </div>
      <button
        onClick={handleGoToNewIdeaPage}
        className="mt-14 sm:mt-0 float-right btn  btn-accent rounded-full  outline-dashed "
      >
        + Create New Idea
      </button>
    </>
  );
};

export default Header;

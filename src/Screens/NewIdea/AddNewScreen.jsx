import React from "react";
import Header from "../Home/components/Header";
import { useNavigate } from "react-router-dom";
import NewIdeaForm from "./components/NewIdeaForm";

const AddNewScreen = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen">
      <div className="header-style">
        <Header />
      </div>

      <button
        onClick={handleBackToHome}
        className="m-10 btn  btn-accent rounded-full   "
      >
        {`🏠  Back to Home`}
      </button>

      <div className="flex flex-col justify-center items-center gap-10 px-3 sm:px-10 md:px-0">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium mt-4">
          Just jot down your ideas below!
        </h2>

        <NewIdeaForm />
      </div>
    </div>
  );
};

export default AddNewScreen;

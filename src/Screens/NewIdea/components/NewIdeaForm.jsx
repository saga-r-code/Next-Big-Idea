import { Info, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { db } from "../../../db";
import { Ideas } from "../../../db/schema";
import Loading from "../../../Loading";

const NewIdeaForm = () => {
  const [idea, setIdea] = useState("");
  const [username, setUsername] = useState("");
  const [showText, setShowText] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(false);

    try {
      const result = await db
        .insert(Ideas)
        .values({
          content: idea,
          username: username,
        })
        .returning();

      if (result) {
        localStorage.setItem("username", username);
        console.log("Insert Successfully ", result);
        setShowText(true);
        setTimeout(() => {
          setShowText(false);
        }, 2000);
        setIdea("");
        setIsLoading(true);
      } else {
        console.log("Insert Failed");
      }
    } catch (error) {
      console.error("Error inserting idea:", error);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setExistingUser(true);
    }
  }, []);

  return (
    <>
      {showText && (
        <div
          role="alert"
          className="alert alert-success    rounded-full md:w-1/3 justify-center shadow-md"
        >
          <span className="text-base ">New Idea Added Successfully</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col  justify-center gap-10 w-full py-10 px-5  md:w-[80%] lg:w-1/2 border-t border-t-slate-500  md:p-10 rounded-lg shadow-md shadow-slate-500"
      >
        <div className="flex flex-col justify-center mb-4">
          <label
            htmlFor="idea"
            className="mb-2 font-semibold text-sm sm:text-lg"
          >
            Your Idea Here
          </label>
          <textarea
            required
            id="idea"
            name="idea"
            value={idea}
            placeholder="Type your idea here..."
            onChange={(e) => setIdea(e.target.value)}
            className="textarea textarea-bordered h-24 w-full focus:outline-none hover:border hover:border-slate-400 for-animation outline-slate-500 p-3"
          ></textarea>
        </div>
        <div className="flex flex-col justify-center mb-4">
          <label
            htmlFor="name"
            className="flex justify-between items-center mb-2 font-semibold text-sm sm:text-lg"
          >
            <p>Your Username</p>
            <p className="text-xs sm:text-sm italic text-gray-500 hover:text-slate-300 for-animation font-normal flex items-center gap-2">
              No Account Required <Info size={18} />
            </p>
          </label>
          <input
            required
            type="text"
            value={username}
            id="username"
            name="username"
            placeholder="John Doe"
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full p-3 hover:border hover:border-slate-400 for-animation"
          />
        </div>

        <button
          type="submit"
          disabled={!(idea && username)}
          className="btn btn-accent  rounded-full w-full py-5 text-base font-semibold"
        >
          {/* {isLoading ? (
            <Loading />
          ) : ( */}
          <p className="flex items-center gap-2">
            {" "}
            Create Idea <Send size={20} />
          </p>
          {/* )} */}
        </button>
      </form>
    </>
  );
};

export default NewIdeaForm;

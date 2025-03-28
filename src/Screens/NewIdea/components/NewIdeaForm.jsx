import { Info, Send } from "lucide-react";
import React from "react";

const NewIdeaForm = () => {
  return (
    <form className="flex flex-col justify-center gap-10 w-1/2 border-t border-t-slate-500  p-10 rounded-lg shadow-md shadow-slate-500">
      <div className="flex flex-col justify-center mb-4">
        <label htmlFor="idea" className="mb-2 font-semibold text-lg">
          Your Idea Here
        </label>
        <textarea
          required
          id="idea"
          className="textarea textarea-bordered h-24 w-full focus:outline-none hover:border hover:border-slate-400 for-animation outline-slate-500 p-3"
          placeholder="Type your idea here..."
        ></textarea>
      </div>
      <div className="flex flex-col justify-center mb-4">
        <label
          htmlFor="name"
          className="flex justify-between items-center mb-2 font-semibold text-lg"
        >
          <p>Your Username</p>
          <p className="text-sm text-gray-500 hover:text-slate-300 for-animation font-normal flex items-center gap-2">
            No Account Required <Info size={18}/>
          </p>
        </label>
        <input
          required
          type="text"
          id="name"
          placeholder="John Doe"
          className="input input-bordered w-full p-3 hover:border hover:border-slate-400 for-animation"
        />
      </div>

      <button
        type="submit"
        className="btn btn-accent  rounded-full w-full py-5 text-base font-semibold"
      >
        Create Idea <Send />
      </button>
    </form>
  );
};

export default NewIdeaForm;

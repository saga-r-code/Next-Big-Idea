import React, { useState } from "react";
import { Calendar, Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import { db } from "../../../db";
import { Ideas } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { handleCheckIsAlreadyDisLike, handleCheckIsAlreadyLike, handleDislikeVote, handleLikeVote } from "../../../Service";

const IdeaItem = ({ idea, index, formatedDate, refreshData }) => {
  const handleLike = async () => {
    try {
      if (handleLikeVote(idea.id)) {
        const result = await db
          .update(Ideas)
          .set({ vote: idea.vote + 1 })
          .where(eq(Ideas.id, idea.id))
          .returning({ id: Ideas.id });

        if (result) {
          refreshData();
        } else {
          console.log("Update Failed for vote like");
        }
      }
    } catch (error) {
      console.error("Error Update idea vote like", error);
    }
  };
  const handleDislike = async () => {
    try {
      if (handleDislikeVote(idea.id)) {
        const newVoteCount = Math.max(0, idea.vote - 1);
        const result = await db
          .update(Ideas)
          .set({ vote: newVoteCount })
          .where(eq(Ideas.id, idea.id))
          .returning({ id: Ideas.id });

        if (result) {
          refreshData();
        } else {
          console.log("Update Failed for vote like");
        }
      }
    } catch (error) {
      console.error("Error Update idea vote like", error);
    }
  };

  return (
    <div>
      <div
        key={idea.id}
        className="relative flex  my-10 justify-center items-start flex-col  p-1 bg-gradient-to-bl from-green-400 to-blue-500 rounded-lg "
      >
        <div className="text-xs btn  btn-accent rounded-full py-4 absolute -top-4 -right-0 sm:-right-5 md:-right-10   ">
          <Calendar size={16} />
          <span>{formatedDate(idea.createdAt)}</span>{" "}
        </div>
        <div className="h-full w-full bg-gray-800 px-4 py-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <p className="font-black text-base bg-gradient-to-r from-sky-400 to-sky-800 bg-clip-text text-transparent">
              {index + 1}.
            </p>
          </div>
          <h3 className="md:text-lg max-h-28 overflow-y-scroll">
            {idea.content}
          </h3>
          <div className="flex justify-between items-center mt-8">
            <p className="text-slate-500  cursor-not-allowed">
              By @
              {idea.username.toUpperCase().charAt(0) + idea.username.slice(1)}
            </p>

            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <ThumbsUp
                // size={20}
                fill={`${handleCheckIsAlreadyLike(idea.id) ? "green" : "gray"}`}
                strokeWidth={0}
                onClick={() => handleLike()}
                className="badge badge-soft hover:bg-slate-600 h-6 rounded-lg"
              />
              <p>{idea.vote}</p>
              <ThumbsDown
                size={20}
                fill={`${handleCheckIsAlreadyDisLike(idea.id) ? "red" : "gray"}`}
                strokeWidth={0}
                onClick={() => handleDislike()}
                className="badge badge-soft hover:bg-slate-600 h-6 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaItem;

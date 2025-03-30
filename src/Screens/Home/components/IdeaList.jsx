import React from "react";
import IdeaItem from "./IdeaItem";
import Loading from "../../../Loading";

const IdeaList = ({ ideaList, refreshData, isLoading }) => {
  const formatedDate = (getDate) => {
    const day = new Date(getDate);
    const date = day.getDate().toString().padStart(2, "0"); // add leading zero if day is less than 10 // 2 digit array
    const month = (day.getMonth() + 1).toString().padStart(2, "0");
    const year = day.getFullYear();

    return `${date}/${month}/${year}`;
  };

  return (
    <div className="px-2 text-white sm:p-0 sm:max-w-2xl mx-auto">
      {isLoading ? (
        ideaList.map((idea, index) => (
          <IdeaItem
            key={idea.id}
            idea={idea}
            index={index}
            formatedDate={formatedDate}
            refreshData={refreshData}
          />
        ))
      ) : (
        <Loading />
      )}
     
    </div>
  );
};

export default IdeaList;

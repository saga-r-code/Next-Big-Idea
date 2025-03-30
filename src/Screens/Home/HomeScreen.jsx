import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { db } from "../../db";
import { Ideas } from "../../db/schema";
import Tabs from "./components/Tabs";
import { useLocation } from "react-router-dom";
import { desc } from "drizzle-orm";
import IdeaList from "./components/IdeaList";

const HomeScreen = () => {
  const location = useLocation();
  const forHot = location.hash === "#hot";
  const forTop = location.hash === "#top";
  const [ideaList, setIdeaList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const GetAllIdea = async () => {
    setIsLoading(false)
    try {
      const result = await db
        .select()
        .from(Ideas)
        .orderBy(desc(forHot || forTop ? Ideas.vote : Ideas.createdAt))
        .limit(10);
      if (result) {
        console.log(result);
        setIdeaList(result);
        setIsLoading(true)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetAllIdea();
  }, [location]);
  return (
    <div>
      <div className="header-style">
        <Header />
      </div>
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList} refreshData={GetAllIdea} isLoading={isLoading}/>
    </div>
  );
};

export default HomeScreen;

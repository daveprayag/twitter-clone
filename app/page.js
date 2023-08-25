"use client";
import { useEffect, useState } from "react";
import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "../components/Widgets";
import CommentModal from "@/components/CommentModal";

export default function Home() {
  const [newsResults, setNewsResults] = useState([]);
  const [randomUsersResults, setRandomUsersResults] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json"
      );
      const data = await response.json();
      setNewsResults(data.articles);
    } catch (error) {
      console.log("Error fetching news data:", error);
    }
  };

  const fetchRandomUserData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=30&inc=name,login,picture"
      );
      const data = await response.json();
      setRandomUsersResults(data.results);
    } catch (error) {
      console.log("Error fetching random user data:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchRandomUserData();
  }, []);

  return (
    <main className="flex min-h-screen mx-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets
        newsResults={newsResults}
        randomUsersResults={randomUsersResults}
      />
      {/* Modal */}
      <CommentModal />
    </main>
  );
}

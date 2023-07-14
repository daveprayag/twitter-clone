"use client";
import { useState } from "react";
import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  const [newsResults, setNewsResults] = useState([]);

  const fetchData = async () => {
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

  fetchData();

  return (
    <main className="flex min-h-screen mx-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets newsResults={newsResults} />
      {/* Modal */}
    </main>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/sport/in.json

// async function getData() {
//   const newsResults = await fetch(
//     "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
//   ).then((res) => res.json());
//   // console.log(newsResults);
//   return {
//     props: {
//       newsResults,
//     },
//   };
// }
// getData();

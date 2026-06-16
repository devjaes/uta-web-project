import * as React from "react";
import newsData from "../data/news.json";
import NewsCard from "./NewsCard";

interface NewsSectionProps {
  limit?: number;
}
const NewsSection = ({ limit }: NewsSectionProps) => {
  const limitedNewsData = limit ? newsData.slice(0, limit) : newsData;
  return (
    <div className="m-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-content-evenly">
      {limitedNewsData.map((newsItem, index) => (
        <NewsCard
          key={index}
          title={newsItem.title}
          image={newsItem.image}
          date={newsItem.date}
          reference={newsItem.reference}
        />
      ))}
    </div>
  );
};

export default NewsSection;

import axios from "axios";
import { useEffect, useState } from "react";
import CardCustom from "./CardCustom";

const NewsCard = () => {
  const apiKey = "f9d7fba9e7bc42b494b6a641544d3477";
  const apiUrl = "https://newsapi.org/v2/sources";

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl, {
        params: {
          category: "technology",
          language: "en",
          country: "us",
          apiKey: apiKey,
        },
      })
      .then((response: any) => {
        setNewsData(response.data.sources);
      })
      .catch((error: any) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  return (
    <div className="news-container">
      {newsData.slice(0, 4).map((article: any, index) => (
        <CardCustom desc={article.description} link={article.url} />
      ))}
    </div>
  );
};

export default NewsCard;

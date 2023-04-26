import React, { useEffect, useState } from "react";
import PostCard from "../../../components/News/PostCard";
import "./news.css";
import NewsService from "../../../services/new.service";

export default function News() {
  const [postList, setPostList] = useState();

  const newServ = new NewsService();

  useEffect(() => {
    async function getProduct() {
      const posts = await newServ.getAll();
      const news = [];
      for (let i = 0; i < posts.length; i++) {
        news[i] = posts[i];
      }
      setPostList(news);
    }

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hardware-container">
      {postList &&
        postList.map((value, index) => {
          return <PostCard key={index} post={value} />;
        })}
    </div>
  );
}

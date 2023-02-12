import React from "react";
import PostCard from "../../../components/News/PostCard";
import "./news.css";

export default function News() {
  return (
    <div className="">
      <div className="news-header">
        <img
          src="https://blog.playstation.com/tachyon/2023/02/1ba8503fca62c808a54a44d8f8d6ce78dbcf9aa1.jpg?resize=1900%2C470&zoom=1"
          alt=""
        />
        <h1 className="text-center m-5">PlayStation News</h1>
      </div>
      <div className="post-list row p-0 m-0">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

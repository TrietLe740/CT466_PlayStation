import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="post-card card col-4 p-1 m-0">
      <Link to={`/news/${post._id}`}>
        <img
          src={post.thumbnail}
          className="card-img-top  post-card-img"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title text-center">{post.title}</h5>
        </div>
      </Link>
    </div>
  );
}

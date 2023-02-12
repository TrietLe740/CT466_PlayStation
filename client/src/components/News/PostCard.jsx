import React from "react";

export default function PostCard() {
  return (
    <div className="post-card card col-4 p-1 m-0">
      <img
        src="https://blog.playstation.com/tachyon/2023/02/049475d935edd86c805f19267c499ff56a7ffac8.jpg?resize=1088%2C612&crop_strategy=smart&zoom=0.5"
        className="card-img-top  post-card-img"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center">
          Share of the Week – Season: A letter to the future
        </h5>
      </div>
    </div>
  );
}

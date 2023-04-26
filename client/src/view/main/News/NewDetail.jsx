import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NewService from "../../../services/new.service";

function ProductDetail() {
  const newServ = new NewService();

  const [post, setPost] = useState();

  let postId = useParams();

  async function getPost() {
    var item;
    item = await newServ.get(postId.id);
    setPost(item);
  }

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="row post-detail-container p-5">
        <div className="post-detail-left mt-3">
          <img src={post?.background} alt="" />
        </div>
        <div className="post-detail-right mt-5 text-center">
          <h2 className="mb-5">{post?.title}</h2>
        </div>
        <p className="post-content">{post?.content}</p>
      </div>
    </Fragment>
  );
}

export default ProductDetail;

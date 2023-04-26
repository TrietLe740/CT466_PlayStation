import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsService from "../../../services/new.service";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function NewDetailEdit() {
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  let productId = useParams();

  const newServ = new NewsService();

  const [post, setPost] = useState();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  async function getProduct() {
    let item = await newServ.get(productId.id);
    setPost(item);
  }

  function updateProduct(payload) {
    console.log(payload);
    setPost((state) => {
      return {
        ...state,
        ...payload,
      };
    });
  }

  const handleUpdate = async (id, data) => {
    try {
      await newServ.update(productId.id, post);
      // console.log(post);
      alert("Update succesfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await newServ.delete(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product_edit_container">
      <div className="p-5">
        <h2>Edit Post</h2>
        <form
          onSubmit={handleSubmit((data) => {
            handleUpdate(productId.id, data);
          })}
        >
          <div className="form-group">
            <label htmlFor="name">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={post?.title}
              onChange={(e) => {
                updateProduct({ title: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              className="form-control"
              type="text"
              name="thumbnail"
              value={post?.thumbnail}
              onChange={(e) => {
                updateProduct({ thumbnail: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="background">Background</label>
            <input
              className="form-control"
              type="text"
              name="background"
              value={post?.background}
              onChange={(e) => {
                updateProduct({ background: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              name="content"
              value={post?.content}
              onChange={(e) => {
                updateProduct({ content: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>

            <Popup
              position="top center"
              open={open}
              closeOnDocumentClick
              onClose={closeModal}
              modal
              trigger={<span className="ml-2 btn btn-danger">Delete</span>}
            >
              {(close) => (
                <div className="popup-register">
                  <p className="text-success">
                    Are you sure to delete this post?
                  </p>
                  <p className="row p-3">
                    <Link
                      to={`/admin/news`}
                      className="btn col-4 bg-danger border-danger text-white"
                      onClick={() => {
                        handleDelete(post?._id);
                      }}
                    >
                      Sure
                    </Link>
                    <Link className="btn col-4" onClick={close}>
                      Cancel
                    </Link>
                  </p>
                </div>
              )}
            </Popup>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewDetailEdit;

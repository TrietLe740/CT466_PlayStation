import { useForm } from "react-hook-form";
import NewsService from "../../../services/new.service";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Popup from "reactjs-popup";

function NewCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const newServ = new NewsService();

  const submitBtnRef = useRef();

  const navigator = useNavigate();

  return (
    <div className="p-5 mt-5">
      <h2 className="mt-5">Create new post</h2>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          try {
            const createResult = await newServ.create(data);
            console.log(createResult);
            navigator(`/admin/news`);
          } catch (error) {
            alert("Error to create new post");
            console.log(error);
          }
        })}
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            {...register("title", { required: "*This is require" })}
            className="form-control"
            type="text"
            name="title"
          />
          <p className="warning">{errors.title?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            {...register("thumbnail", { required: "*This is require" })}
            className="form-control"
            type="text"
            name="thumbnail"
          />
          <p className="warning">{errors.thumbnail?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="background">Background</label>
          <input
            {...register("background", { required: "*This is require" })}
            className="form-control"
            type="text"
            name="background"
          />
          <p className="warning">{errors.background?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            className="form-control"
            {...register("content", { required: "*This is require" })}
          ></textarea>
          <p className="warning">{errors.content?.message}</p>
        </div>
        <div className="form-group">
          <Popup
            position="top center"
            open={open}
            closeOnDocumentClick
            onClose={closeModal}
            modal
            trigger={<span className="ml-2 btn">Create</span>}
          >
            {(close) => (
              <div className="popup-register">
                <p className="text-success">
                  Are you sure to create this post?
                </p>
                <p className="row p-3">
                  <button
                    className="btn bg-success text-white border-success col-4"
                    onClick={() => {
                      submitBtnRef.current?.click();
                      close();
                    }}
                  >
                    Sure
                  </button>
                  <Link className="btn col-4" onClick={close}>
                    Cancel
                  </Link>
                </p>
              </div>
            )}
          </Popup>
        </div>
        <button type="submit" ref={submitBtnRef}></button>
      </form>
    </div>
  );
}

export default NewCreate;

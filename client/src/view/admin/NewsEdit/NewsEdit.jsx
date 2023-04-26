import { useEffect, useState } from "react";
import NewsService from "../../../services/new.service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function NewsEdit() {
  const [postList, setPostList] = useState();

  const newServ = new NewsService();

  useEffect(() => {
    async function getNew() {
      const post = await newServ.getAll();
      const news = [];
      for (let i = 0; i < post.length; i++) {
        news[i] = post[i];
      }
      setPostList(news);
    }

    getNew();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="table mt-5">
      <div className="table-body mt-5">
        <div className="table-responsive">
          <table>
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>Title</th>
                <th>
                  <Link to={`/admin/news/create`} className="btn">
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </Link>
                </th>
              </tr>
              {postList &&
                postList.map((value, index) => {
                  return (
                    <tr key={index} post={value}>
                      <td>{value._id}</td>
                      <td>{value.title}</td>
                      <td>
                        <div className="btn-group">
                          <button>
                            <Link to={`/admin/news/${value._id}`}>
                              <i className="fa fa-pencil"></i>
                            </Link>
                          </button>
                          {/* <button>
                            <i className="fa fa-trash"></i>
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NewsEdit;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";

function UsersEdit() {
  const [userList, setUserList] = useState();

  const authServ = new AuthService();

  useEffect(() => {
    async function getUser() {
      const auth = await authServ.getAll();
      const users = [];
      for (let i = 0; i < auth.length; i++) {
        users[i] = auth[i];
      }
      setUserList(users);
    }

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="table mt-5">
      <div className="table-body mt-5">
        <div className="table-responsive">
          <table>
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
              {userList &&
                userList.map((value, index) => {
                  return (
                    <tr key={index} hardware={value}>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>
                        <div className="btn-group">
                          <button>
                            <Link to={`/admin/users/${value._id}`}>
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

export default UsersEdit;

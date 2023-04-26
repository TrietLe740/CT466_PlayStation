import { Link } from "react-router-dom";
import "./AdminDashboard.css";
import playstationService from "../../../services/playstation.service";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [hardwareList, setHardwareList] = useState();

  const hardwareServ = new playstationService();

  useEffect(() => {
    async function getProduct() {
      const products = await hardwareServ.getAll();
      const hardwares = [];
      for (let i = 0; i < products.length; i++) {
        hardwares[i] = products[i];
      }
      setHardwareList(hardwares);
    }

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard main-content">
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <Link to={`/admin/users`}>
            <div className="admin-card-icon-i">
              <i className="fa fa-users"></i>
            </div>
            <h3>Users</h3>
          </Link>
        </div>
      </div>
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <Link to={`/admin/hardwares`}>
            <div className="admin-card-icon-i">
              <i className="fa fa-shopping-bag"></i>
            </div>
            <h3>Hardwares</h3>
          </Link>
        </div>
      </div>
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <Link to={`/admin/games`}>
            <div className="admin-card-icon-i">
              <i class="fa-solid fa-gamepad"></i>
            </div>
            <h3>Games</h3>
          </Link>
        </div>
      </div>
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <Link to={`/admin/news`}>
            <div className="admin-card-icon-i">
              <i class="fa-solid fa-newspaper"></i>
            </div>
            <h3>News</h3>
          </Link>
        </div>
      </div>
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <Link to={`/admin/invoices`}>
            <div className="admin-card-icon-i">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <h3>Invoices</h3>
          </Link>
        </div>
      </div>
      <div className="table">
        <div className="table-head">
          <h3 className="font-weight-bold">Products</h3>
        </div>
        <div className="table-body">
          <div className="table-responsive">
            <table>
              <thead>
                <tr className="text-center">
                  <th>Name</th>
                  <th>Price</th>
                  <th>Sale</th>
                  <th>Operation</th>
                </tr>
                {hardwareList &&
                  hardwareList.map((value, index) => {
                    return (
                      <tr key={index} hardware={value}>
                        <td>{value.name}</td>
                        <td>{value.price}$</td>
                        <td>{value.sale}</td>
                        <td>
                          <div className="btn-group">
                            <button>
                              <Link to={`/admin/products/:id`}>
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
      <div className="admin-cards">
        <div className="admin-card">
          <div className="icon">
            <i className="fa fa-users"></i>
          </div>
          <div className="num">User</div>
        </div>
        <div className="admin-card">
          <div className="icon">
            <i className="fa fa-copy"></i>
          </div>
          <div className="num">Product</div>
        </div>
        <div className="admin-card">
          <div className="icon">
            <i className="fa fa-shopping-bag"></i>
          </div>
          <div className="num">Invoice</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

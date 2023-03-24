function AdminDashboard() {
  return (
    <div className="dashboard main-content">
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <div className="admin-card-icon-i">
            <i className="fa fa-users"></i>
          </div>
          <h3>Người dùng</h3>
        </div>
      </div>
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <div className="admin-card-icon-i">
            <i className="fa fa-shopping-bag"></i>
          </div>
          <h3>Sản phẩm</h3>
        </div>
      </div>
      <div className="admin-card-icon">
        <div className="admin-card-icon-body">
          <div className="admin-card-icon-i">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <h3>Đơn hàng</h3>
        </div>
      </div>
      <div className="table">
        <div className="table-head">
          <h3 className="font-weight-bold">Top sản phẩm</h3>
        </div>
        <div className="table-body">
          <div className="table-responsive">
            <table>
              <thead>
                <tr className="text-center">
                  <th>Tên sản phẩm</th>
                  <th>Giá bán</th>
                  <th>Giảm giá</th>
                  <th>Thao tác</th>
                </tr>
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
          <div className="num">1000</div>
          <h3>Users</h3>
        </div>
        <div className="admin-card">
          <div className="icon">
            <i className="fa fa-copy"></i>
          </div>
          <div className="num">3400</div>
          <h3>Projects</h3>
        </div>
        <div className="admin-card">
          <div className="icon">
            <i className="fa fa-shopping-bag"></i>
          </div>
          <div className="num">2000</div>
          <h3>Products</h3>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

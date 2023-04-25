import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Context from "../../store/Context";

import LOGO from "../../assets/Logo.png";

function AdminHeader() {
  const { admin, setAdmin } = useContext(Context);

  const handleLogout = async () => {
    setAdmin(null);
  };

  return (
    <nav className="navbar nav">
      <div className="inner container">
        <Link className="logo" to={`/admin`}>
          <img className="logo-img" src={LOGO} alt="logo" />
        </Link>
        <div className="main-nav">
          <Link to={`/admin`}>Home</Link>
          <Link to={`/admin/users`}>Users</Link>
          <Link to={`/admin/hardwares`}>Hardwares</Link>
          <Link to={`/admin/games`}>Games</Link>
          <Link to={`/admin/invoices`}>Invoices</Link>
        </div>
        <div className="action">
          <button to={`/login`} className="user-btn btn" onClick={handleLogout}>
            <span className="log-btn">{admin ? "Logout" : "Login"}</span>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;

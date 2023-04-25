import React, { Fragment, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./layout.css";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminFooter from "../../components/Admin/AdminFooter";
import Context from "../../store/Context";

export default function AdminLayout() {
  const { admin } = useContext(Context);
  const navigator = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigator(`/admin/login`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin]);

  return (
    <Fragment>
      <AdminHeader />
      <main className="container">
        <Outlet />
      </main>
      <AdminFooter />
    </Fragment>
  );
}

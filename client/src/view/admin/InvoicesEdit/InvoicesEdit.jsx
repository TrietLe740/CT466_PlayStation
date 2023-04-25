import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceService from "../../../services/invoice.service";

function InvoicesEdit() {
  const [userList, setUserList] = useState();

  const invoiceServ = new InvoiceService();

  useEffect(() => {
    async function getInvoice() {
      const invoice = await invoiceServ.getAll();
      const invoices = [];
      for (let i = 0; i < invoice.length; i++) {
        invoices[i] = invoice[i];
      }
      setUserList(invoices);
    }

    getInvoice();
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
                <th>Customer</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
              {userList &&
                userList.map((value, index) => {
                  return (
                    <tr key={index} hardware={value}>
                      <td>{value._id}</td>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>
                        <div className="btn-group">
                          <button>
                            <Link to={`/admin/invoices/${value._id}`}>
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

export default InvoicesEdit;

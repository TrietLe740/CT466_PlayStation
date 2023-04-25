import { useEffect, useState } from "react";
import PlayStationService from "../../../services/playstation.service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function ProductsEdit() {
  const [hardwareList, setHardwareList] = useState();

  const hardwareServ = new PlayStationService();

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
    <div className="table mt-5">
      <div className="table-body mt-5">
        <div className="table-responsive">
          <table>
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Operation</th>
                <th>
                  <Link to={`/admin/hardwares/create`} className="btn">
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </Link>
                </th>
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
                            <Link to={`/admin/hardwares/${value._id}`}>
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

export default ProductsEdit;

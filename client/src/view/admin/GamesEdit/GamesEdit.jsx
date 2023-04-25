import { useEffect, useState } from "react";
import GamesService from "../../../services/game.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function GamesEdit() {
  const [gameList, setGameList] = useState();

  const gameServ = new GamesService();

  useEffect(() => {
    async function getProduct() {
      const products = await gameServ.getAll();
      const games = [];
      for (let i = 0; i < products.length; i++) {
        games[i] = products[i];
      }
      setGameList(games);
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
                  <Link to={`/admin/games/create`} className="btn">
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </Link>
                </th>
              </tr>
              {gameList &&
                gameList.map((value, index) => {
                  return (
                    <tr key={index} hardware={value}>
                      <td>{value.name}</td>
                      <td>{value.price}$</td>
                      <td>{value.sale}</td>
                      <td>
                        <div className="btn-group">
                          <button>
                            <Link to={`/admin/games/${value._id}`}>
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

export default GamesEdit;

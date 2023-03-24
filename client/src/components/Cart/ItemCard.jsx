import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Context from "../../store/Context";

function ItemCard({ value }) {
  const { setCart } = useContext(Context);
  const [quantityInput, setQuantityInput] = useState(value.quantity);
  // console.log(quantityInput, value.quantity);

  function handleDelete() {
    setCart((oldState) => {
      return oldState.filter((v, i) => {
        return v.id !== value.id;
      });
    });
    console.log("delete");
  }

  useEffect(() => {
    if (!isNaN(quantityInput)) {
      setCart((oldState) => {
        return oldState.map((v, i) => {
          if (v.id === value.id) {
            const quantity =
              quantityInput > 5 ? 5 : quantityInput > 0 ? quantityInput : 1;
            return {
              ...v,
              quantity,
            };
          } else {
            return v;
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityInput]);

  useEffect(() => {
    setQuantityInput(value.quantity);
    console.log(quantityInput, value.quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <tr className="border-bottom">
      <td>
        <div className="d-flex align-items-center">
          <div>
            <img className="pic" src={value.img} alt="" />
          </div>
          <div>
            <span className="ml-3">{value.name}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex">
          <span className="text-muted">{value.price * value.quantity}$</span>
        </div>
      </td>
      <td>
        <div className="d-flex ">
          <span className="text-muted">Quantity</span>
          <span className="ml-2">
            <input
              className="ps-2"
              type="number"
              min="1"
              max="5"
              value={quantityInput}
              onChange={(e) => {
                setQuantityInput(e.target.value);
              }}
            />
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex justify-content-between">
          <button
            className="btn-border pt-1 pb-1 pl-3 pr-3"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ItemCard;

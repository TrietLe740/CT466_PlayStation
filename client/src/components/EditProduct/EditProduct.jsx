import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./editproduct.css";

import { useState } from "react";
import playstationService from "../../services/playstation.service";

function EditProduct({ product, onEditSuccess }) {
  const [nameEdit, setNameEdit] = useState(product?.name || "");
  const [priceEdit, setPriceEdit] = useState(product?.price || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [editResult, setEditResult] = useState("");

  async function updateProduct() {
    setIsLoading(true);
    const result = await playstationService.update(product._id, {
      name: nameEdit,
      price: priceEdit,
    });
    if (result?.message === "Product was updated succesfully") {
      onEditSuccess();
    }
    setEditResult(result.message);
    setIsLoading(false);
    console.log(result);
  }

  console.log(product);

  return (
    <div className={isLoading && `disable-form`}>
      {isLoading && <FontAwesomeIcon icon={faUser} />}
      <p>{editResult}</p>
      <input
        placeholder="Name"
        type="text"
        value={nameEdit}
        onChange={(e) => {
          setNameEdit(e.target.value);
        }}
      />
      <input
        placeholder="Price"
        type="number"
        value={priceEdit}
        onChange={(e) => {
          setPriceEdit(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updateProduct();
        }}
      >
        Update
      </button>
    </div>
  );
}

export default EditProduct;

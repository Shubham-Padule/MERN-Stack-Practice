// NewProduct.js
import { useState } from "react";

function NewProduct() {
  const [txtName, setTxtName] = useState("");
  const [txtPrice, setTxtPrice] = useState("");

  const txtChange = (event) => {
    setTxtName(event.target.value);
  };

  const priceChange = (event) => {
    setTxtPrice(event.target.value);
  };

  const funInsert = (event) => {
    event.preventDefault();

    // Basic validation to ensure both name and price are provided
    if (txtName.trim() === "" || txtPrice.trim() === "") {
      alert("Please provide both product name and price.");
      return;
    }

    const obj = {
      prodName: txtName,
      prodPrice: txtPrice
    };

    console.log(obj);

    // You can add further logic to handle insertion of the new product here

    // Clear input fields after insertion
    setTxtName("");
    setTxtPrice("");
  };

  return (
    <div>
      <form>
        <div>ProdName: <input type="text" onChange={txtChange} value={txtName} /></div>
        <div>ProdPrice: <input type="text" onChange={priceChange} value={txtPrice} /></div>
        <div><input type="submit" value="InsertProduct" onClick={funInsert} /></div>
      </form>
    </div>
  );
}

export default NewProduct;

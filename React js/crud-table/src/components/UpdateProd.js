// UpdateProd.js
import { useEffect, useState } from "react";

function UpdateProd(props) {
  const [txtName, setTxtName] = useState("");
  const [txtPrice, setTxtPrice] = useState("");
  const [isReadonly, setIsReadonly] = useState(false);

  useEffect(() => {
    setIsReadonly(false);
    setTxtName(props.rowdata.prodName);
    setTxtPrice(props.rowdata.prodPrice);
  }, [props]);

  const txtChange = (event) => {
    setTxtName(event.target.value);
  };

  const priceChange = (event) => {
    setTxtPrice(event.target.value);
  };

  const funUpdate = (event) => {
    event.preventDefault();
    const obj = { prodName: txtName, prodPrice: txtPrice };
    console.log(obj);
    props.getupobj(obj);
    setTxtName("");
    setTxtPrice("");
  };

  return (
    <div>
      <form>
        <div>ProdName: <input type="text" onChange={txtChange} value={txtName} readOnly={isReadonly} /></div>
        <div>ProdPrice: <input type="text" onChange={priceChange} value={txtPrice} readOnly={isReadonly} /></div>
        <div><input type="submit" value="UpdateProduct" onClick={funUpdate} /></div>
      </form>
    </div>
  );
}

export default UpdateProd;

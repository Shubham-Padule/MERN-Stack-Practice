//AddProduct.js
import { useRef } from "react";
function AddProduct() {
  let idRef = useRef();
  let titleRef = useRef();
  let priceRef = useRef();
  async function funAdd() {
    var obj = {
      id: idRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
    };
    console.log(obj);
    var result = await fetch("https://dummyjson.com/products/add/", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    });
    var out = await result.json();
    console.log(out);
  }
  return (
    <>
      <form>
        <div>
          Id:<input type="text" ref={idRef}></input>
        </div>
        <div>
          Title:<input type="text" ref={titleRef}></input>
        </div>
        <div>
          Price:<input type="text" ref={priceRef}></input>
        </div>
        <div>
          Image:<input type="file"></input>
        </div>
        <div>
          <input type="button" value="Insert" onClick={funAdd}></input>
        </div>
      </form>
    </>
  );
}
export default AddProduct;

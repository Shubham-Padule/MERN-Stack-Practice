//NewProduct.js
import { useState } from "react";
import prodStyle from "./NewProduct.module.css";

function NewProduct(){

    let [txtName,setTxtName]=useState();
    let [txtPrice,setTxtPrice]=useState();

    let txtChange=(event)=>{
        setTxtName(event.currentTarget.value);
       
    }
    let priceChange=(event)=>{
        setTxtPrice(event.currentTarget.value);
    }

    function funInsert(event){
        event.preventDefault();
        var obj={prodName:txtName,
                prodPrice:txtPrice
                };

        console.log(txtName,txtPrice);
    }
    return(<div>
            <form>
                <div>ProdName:<input type="text" onChange={txtChange}></input></div>
                <div>ProdPrice:<input type="text" onChange={priceChange}></input></div>
                <div><input type="submit" value="InsertProduct" onClick={funInsert}></input></div>
            </form>
       
        </div>
        );
}

export default NewProduct;
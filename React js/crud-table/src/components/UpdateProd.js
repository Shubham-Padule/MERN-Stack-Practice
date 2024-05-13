//UpdateProd.js
import { useState,useEffect } from "react";
function UpdateProd(props){

 console.log(props.rowData.prodName);
 let [txtName,setTxtName]=useState();
 let [txtPrice,setTxtPrice]=useState();

 let priceChange=(event)=>{
 setTxtPrice(event.currentTarget.value);
 }
 function funUpdate(event){
 event.preventDefault();
 var obj={prodName:txtName,prodPrice:txtPrice};
 setTxtName("");
 setTxtPrice("");
 console.log(obj);
 props.getUpObj(obj);

 }

 useEffect(()=>{

 setTxtName(props.rowData.prodName);
 setTxtPrice(props.rowData.prodPrice);
 },[props]);
return(<div>
 <form >
 <div>ProdName:<input type="text" defaultValue={txtName} ></input></div>
 <div>ProdPrice:<input type="text" onChange={priceChange} defaultValue={txtPrice} /></div> <div><input type="submit" value="UpdateProduct" onClick={funUpdate}></input></div>
 </form>
</div>)
}
export default UpdateProd;
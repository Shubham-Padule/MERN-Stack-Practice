//ProdList.js
import { useEffect, useState } from "react";
import "./ProdList.css";
import styleCss from "./ProdList.module.css";
import UpdateProd from "./UpdateProd";
function ProdList(props){

 let products=props.data;
 console.log("prodList");
 //inline
 var myStyle={backgroundColor:"lightblue",width:"100%"};
 function funEdit(x){
 console.log(x.prodName,x.prodPrice);
 var pr=prompt("Enter new Price:");
 x.prodPrice=pr;
 props.upProd(x);
 }
 function funDelete(x){
 console.log(x.prodName,x.prodPrice);
 props.delProd(x);
 }

 


 let [upObj, setUpObj] = useState({});
 let [rowflag, setRowFlag] = useState(false);
 let rowClick = (x) => {
   setRowFlag(true);
   setUpObj(x);
   console.log(upObj.prodName);
 };
 
 return(

 <div >
 <table border="2" className="table">
 <tr>
 <td>Index</td>
 <td>Name</td>
 <td>Price</td>
 <td>Action</td>
 </tr>
 {
 products.map((x,index)=>(
 <tr key={x.prodPrice} className={styleCss.table_style} onClick={()=>{rowClick(x)}}>
 <td>{index}</td>
 <td>{x.prodName}</td>
 <td>{x.prodPrice}</td>
 <td><a href="" onClick={(event)=>{event.preventDefault();funEdit(x);}}>Edit</a>/<a
href="" onClick={(event)=>{event.preventDefault();funDelete(x);}}>Delete</a></td>
 </tr>
 ))
 }

 </table>
 {/* <div>
 {
 clickFlag && <UpdateProd obj={upObj}/>
 }
 
 </div> */}
 <div>
  rowflag && <UpdateProd  rowdata={upObj} getupobj={setUpObj} />
 </div>
 </div>
 );
}
export default ProdList;

//app.js
import { useState } from 'react';
import './App.css';
import ProdList from './components/ProdList';
import NewProduct from './components/NewProduct';
import UpdateProd from './components/UpdateProd';
import pic from "./logo.svg"
function App() {
 let products=[
 {prodName:"marker",prodPrice:100},
 {prodName:"pens",prodPrice:200},
 {prodName:"colors",prodPrice:500}
 ];
 let [prodArr,setProdArr]=useState(products);

 let count=0;
 let [btnCount,setBtnCount]=useState(count)
 let funClick=()=>{
 btnCount++;
 setBtnCount(btnCount);
 console.log("btn click="+btnCount);
 }
 //conditional rendering
 let [showBtn,setShowBtn]=useState(false);
 let funShow=()=>{
 setShowBtn(!showBtn);
 }
 let [addBtn,setAddBtn]=useState(false);
 function funAdd(){
 setAddBtn(!addBtn);
 }
 //inserting in ar array
 function getObj(newValue){
 console.log(newValue);
 setProdArr([...prodArr,newValue]);
 console.log(prodArr);
 }
 function getUpProd(newX){
 // var arr=prodArr;
 // console.log(arr);
 // for(let i=0;i<arr.length;i++){
 // if(arr[i].prodName===newX.prodName){
 // arr[i].prodPrice=newX.prodPrice;
 // }
 // }
 // console.log("after"+arr);
 // setProdArr(arr);
 // console.log(prodArr);
 var arr=prodArr.map((x)=>{
 if(x.prodName===newX.prodName){
 x.prodPrice=newX.prodPrice;

 }
 return x;
 })
 console.log(arr);
 setProdArr(arr);
 console.log(prodArr);

 }
 let delObj=(newObj)=>{
 // for(let i=0;i<prodArr.length;i++){
 // if(prodArr[i].prodName==newObj.prodName){
 // prodArr.splice(i,1);
 // }
 // }
 // setProdArr(prodArr);
 console.log("deleted",newObj);
 var arr=prodArr.filter((x,ind)=>{
 if(x.prodName!=newObj.prodName){
 console.log(newObj.prodName);
 //prodArr.splice(ind,1);
 return x;
 }
 }
 );
 console.log(arr);
 setProdArr(arr);
 }
 let myStyle={width:"100px",height:"100px"};
 return (
 <div>Hello
 <p>This is React Application</p>
 <img src={pic} style={myStyle}></img>
 <p>Dt:{new Date().toLocaleDateString()}</p>
 <input type="button" value="Show Count" onClick={funClick}></input>
 <p>count={btnCount}</p>
 <input type="button" value="Show products" onClick={funShow}></input>
 {
 <ProdList data={prodArr} upProd={getUpProd} delProd={delObj} />
 }
 <input type="button" value="AddProduct" onClick={funAdd}></input>
 {
 addBtn && <NewProduct insertObj={getObj}/>
 }


 </div>
 );
}
export default App;
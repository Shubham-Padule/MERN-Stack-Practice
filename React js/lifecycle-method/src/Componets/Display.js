import {   useState,useEffect } from "react";
import "../App.css";

function Display(){
    let  data=new Array();
    let [prodarr,setProdarr]=useState(data);

    async function GetAllRecords(){
           var result= await fetch("https://dummyjson.com/products");
           var out =await result.json();
           setProdarr(out.products);
           console.log(out.products);
    }
    useEffect(() => {
     GetAllRecords()
    }, []);


    return(
        <>
        <table border={2}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Images</td>
                </tr>
            </thead>
            <tbody>
                {prodarr.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td><img src={product.thumbnail} alt={product.title} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Display;
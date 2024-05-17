import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateProduct(props){

    
    let [txtId,setId]=useState();
    let [txtTitle,setTitle]=useState();
    let [txtPrice,setPrice]=useState();


    function idChange(event){
        setId(event.currentTarget.value);
    }
    function titleChange(event){
        setTitle(event.currentTarget.value);
    }
    function priceChange(event){
        setPrice(event.currentTarget.value);
    }
    async function funUpdate(){
        //console.log(txtId,txtTitle,txtPrice);
        var obj={
                    price:txtPrice
        }
        var result=await fetch("https://dummyjson.com/products/"+txtId,{
            method:"PUT",
            body:JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        });
        var out=await result.json();
        console.log(out);
        setId("");
        setTitle("");
        setPrice("");

    }
    async function funDelete(){
        var result=await fetch("https://dummyjson.com/products/"+txtId,{
            method:"DELETE"
            
        });
        var out=await result.json();
        console.log(out);
        setId("");
        setTitle("");
        setPrice("");
    }
    useEffect(()=>{
        let rowData=props.row;
        console.log(rowData);
        setId(props.row.id);
        setTitle(props.row.title);
        setPrice(props.row.price);
    },[props])
    
    return(
        <>
       return (
    <>
        <Form>
            <Form.Group>
                <Form.Label>Id:</Form.Label>
                <Form.Control type="text" onChange={idChange} value={txtId} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" onChange={titleChange} value={txtTitle} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" onChange={priceChange} value={txtPrice} />
            </Form.Group>
            <Button variant="primary" onClick={funUpdate}>Update</Button>{' '}
            <Button variant="danger" onClick={funDelete}>Delete</Button>
        </Form>
    </>
);

        </>
    )
}
export default UpdateProduct;
import { useState,useEffect } from 'react';
import React from 'react';
import {Modal, Button } from 'react-bootstrap';

const MyModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);  
  };
   
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
      setIsModalOpen(false);

  }
  async function funDelete(){
      var result=await fetch("https://dummyjson.com/products/"+txtId,{
          method:"DELETE"
          
      });
      var out=await result.json();
      console.log(out);
      setIsModalOpen(false);
      
  }
  useEffect(()=>{
    setIsModalOpen(true);
    let rowData=props.row;
    console.log(rowData);
    setId(props.row.id);
    setTitle(props.row.title);
    setPrice(props.row.price);
  },[props])
  return (
<>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Row Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <form>
        <div>
            Id:<input type="text" onChange={idChange} value={txtId}></input>
        </div>
        <div>
            Title:<input type="text" onChange={titleChange} value={txtTitle}></input>
        </div>
        <div>
            Price:<input type="text" onChange={priceChange} defaultValue={txtPrice}></input>
        </div>
       
       
    </form>
          </div>
         
        </Modal.Body>
        <Modal.Footer>
        <div>
            <input type="button" value="Update" onClick={funUpdate}></input>
            <input type="button" value="Delete" onClick={funDelete}></input>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button></div>
        </Modal.Footer>
      </Modal>
      </>
  );
 
};

export default MyModal;

import React from "react";
import "./Prodarr.css"; // Assuming you have custom CSS styles in this file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Prodarr() {
    var mystyle = {
        color: "red",
        backgroundColor: "yellow"
    };
    const colors = ["Red", "Yellow", "Blue", "Green"]; 
    // Sample array of items
  var funClick = () => {
    alert("its clicked");   
  }

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item list-group-item-primary">Red</li>
                <li className="list-group-item list-group-item-warning">Yellow</li>
            </ul>
            <h1 style={mystyle}>Custom Styling</h1>
            <div>
            <ul>
                {colors.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <input type="button" value= "click" onClick={funClick}></input>
        </div>
        
    );
}

export default Prodarr;

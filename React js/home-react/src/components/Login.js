//LoginForm.js
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import cookie from "js-cookie";

function LoginForm() {
  let [txtName, setTxtName] = useState();
  let [txtPassword, setTxtPassword] = useState();
  let txtNameChange = (event) => {
    setTxtName(event.currentTarget.value);
  };
  let txtPasswordChange = (event) => {
    setTxtPassword(event.currentTarget.value);
  };
  let funLogin = (event) => {
    event.preventDefault();

    var data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == txtName && data[i].password == txtPassword) {
        console.log("Login Successfull");
        cookie.set("color", "red", { expires: 2 });
        var cookievalue = cookie.get("color");
        console.log(cookievalue);
      }
    }
  };
  let funsearch = (event) => {

  };






  

  return (
    <div>
      <form>
        <div>
          Name:<input type="text" onChange={txtNameChange}></input>
        </div>
        <div>
          Password:
          <input type="text" onChange={txtPasswordChange} />
        </div>
        <div>
          <input type="submit" value="Login" onClick={funLogin}></input>
        </div>
        <div>
          <input type="reset" value="Reset"></input>
        </div>
        <div>
          <input type="Button" value="search" onClick={funsearch}></input>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;

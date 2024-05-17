//SignInForm.js
import { useRef } from "react";
import { useParams } from "react-router-dom";
function SignInForm() {
  let txtName = useRef();
  let txtPassword = useRef();
  var arr = [];
  let funSignIn = () => {
    let formData = {
      name: txtName.current.value,
      password: txtPassword.current.value,
    };
    console.log(formData);
    arr.push(formData);
    localStorage.setItem("user", JSON.stringify(arr));
  };
  return (
    <>
    <div>
      <form>
        <div>
          UserName:
          <input type="text" ref={txtName} />
        </div>
        <div>
          Password:
          <input type="text" ref={txtPassword} />
        </div>
        <div>
          <input type="button" value="SignUp" onClick={funSignIn} />
        </div>
      </form>
    </div>
    </>
  );
}
export default SignInForm;



function Signupform(){
    let txtname = useRef();
    let txtpass = useRef();


    let funSignin=()=>{
        let formData={
        name:txtname.current.value,
        password:txtpass.current.value
    }
    console.log(formData);
    }


    return(
        <div>
            <h1>Signup</h1>
            <form>
                <div>
                <label>Username</label>
                <input type="text" name="username" id="username" ref={txtname} placeholder="Enter Username" />
                </div>
                <div>
                <label>Password</label>
                <input type="text" name="password" id="password" ref={txtpass} placeholder="Enter Password" />
                </div>
            </form>
        </div>
    )
        
}
import { useRef } from "react";
import "./register.css";
import api from '../api';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate=useNavigate();
  const registerApi=async ()=>{
    try{
      const response=await api.post("/auth/register",{email:email.current.value,password:password.current.value,passwordAgain:passwordAgain.current.value});
      if(response.data.msg==="Record Inserted"){
        const { result }=response.data;
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/home");
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BOOK BUS</h3>
          <span className="loginDesc">
            Book your seat.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              type="text"
            />
            <input
              placeholder="Confirm Password"
              ref={passwordAgain}
              className="loginInput"
              type="text"
            />
            <button className="loginButton" onClick={registerApi}>
              R E G I S T E R
            </button>
            <button className="loginRegisterButton" onClick={()=>{navigate("/")}}>L O G I N</button>
          </div>
        </div>
      </div>
    </div>
  );
}
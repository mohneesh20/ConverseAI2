import { useRef } from "react";
import "./login.css";
import api from '../api';
import { useNavigate } from "react-router-dom";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate=useNavigate();
  const login=async ()=>{
    try{
      const response=await api.post("/auth/login",{email:email.current.value,password:password.current.value});
      // console.log(response.data.user);
      const {user}=response.data;
      console.log(user);
      if(response.data.msg=="Login successfull"){
        localStorage.setItem("user",JSON.stringify(user));
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
            Book your preferred seats.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="text"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" onClick={login}>
                L O G I N
            </button>
            <button className="loginRegisterButton" onClick={()=>{navigate("/register")}}>
                CREATE A NEW ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
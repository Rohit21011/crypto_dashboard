import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();

  const login=()=>{
  navigate("/dashboard");
  }
 
  return (
    <div className="loginLayout">
      <form>
        <div className="input-style">
          <div className="icons">
            <label for="username">
              <i class="material-icons">person</i>
            </label>
          </div>

          <div>
            <input type="text" id="username" placeholder="Username"></input>
          </div>
        </div>
        <div className="input-style">
          <div className="icons">
            <label for="password">
              <i class="material-icons">lock</i>
            </label>
          </div>
          <div>
            <input type="text" id="password" placeholder="Password"></input>
          </div>
        </div>
        <div>
        <button type="Submit" value="Submit"  onClick={login} >
         Login
        </button>
        
        </div>
        
        <div className="input-style">
            <p>Not a member?<a href="signup.js">Sign up</a></p>
        </div>
        
      </form>
      
     </div>
    
  );
};

export default Login;

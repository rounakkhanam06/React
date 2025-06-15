import { useState } from 'react'

function HandleLogin(){
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    const CheckLogin= ()=>{
        setIsAuthenticated((prev)=> !prev);
    }

// And return JSX
  return (
    <div>
      {isAuthenticated ? <p>Welcome, User</p> : <p>Please login</p>}
      <button onClick={CheckLogin}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
}
export default HandleLogin;





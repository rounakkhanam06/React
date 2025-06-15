
// /pages/Login.jsx
import { useNavigate } from "react-router-dom";
function Login(){
   const navigate = useNavigate();

   function HandleLogin(){
    navigate('/Profile');
   }

   return(
    <>
        <button onClick={HandleLogin}>Click Here, Go to Profile</button>
    </>
   )

}

export default Login;
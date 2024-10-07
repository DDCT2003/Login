import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { AuthProvider, useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const goTo= useNavigate();

  if(auth.isAuthenticated){
    return <Navigate to="/Dashboard"/>
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3100/api/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      if(response.ok){
        console.log("Login successful");
        auth.isAuthenticated=true;
        goTo("/Dashboard")
      }else{
        console.log("Error")
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </DefaultLayout>
  );
}

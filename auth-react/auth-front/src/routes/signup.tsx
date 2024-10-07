import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const goTo= useNavigate();

  if(auth.isAuthenticated){
    return <Navigate to="/Dashboard"/>
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3100/api/signup',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          password
        })
      })

      if(response.ok){
        console.log("User created succesfully")
        goTo("/")
      }else{
        console.log("Error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleSubmit} >
        <h1>Sign Up</h1>
        
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button >Create User</button>
      </form>
    </DefaultLayout>
  );
}

import { useState } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute(){

    const Auth=useAuth()
    return Auth.isAuthenticated? <Outlet/> : <Navigate to="/"/>
}
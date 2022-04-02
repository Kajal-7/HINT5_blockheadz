import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../data/auth';

export default function PrivateRoute({child}){

    const {user} = useAuthContext();
    console.log(user);
    if(!user){
        return <Navigate to="/"/> 
    }
    return child;
}
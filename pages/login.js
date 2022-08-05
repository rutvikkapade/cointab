import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Login() {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  return (
      <div>
        <form>
          <input type="email" placeholder='email' required onChange={(event)=>{
            setEmail(event.target.value);
          }}></input>
          <input type="password" required onChange={(event)=>{
            setPassword(event.target.value)
          }}></input>
          <button onClick={async(event)=>{
            const validateCheck=await validate(email);
            console.log(1,2,3)
            console.log(validateCheck[0]);
            //login(email,password);
            event.preventDefault();
          }}>submit</button>
        </form>
      </div>
  )
}

const validate=async(email)=>{
const data=await fetch('http://localhost:3000/api/hello');
return data.json()
}
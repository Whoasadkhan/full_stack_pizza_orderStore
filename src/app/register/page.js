"use client"

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);


  async function handleSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false); 
    setUserCreated(false);
    const response = await fetch('/api/register/', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  };


  return (
    <section className="mt-8">
      <h1 className="text-4xl text-primary mb-4 text-center ">
        Register
      </h1>
      {userCreated && (
        <div className=" my-4 text-center"> User is created. Now you can {' '} <Link className = " underline italic" href = {'/login'}> Login &raquo;</Link></div>
      )}
        {error && (
          <div className=" m-4 text-center">
            An erron has occured. <br /> Please try again later.
          </div>
        )}
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
      <input type="email" placeholder="email" value={email}
              name = {'email'}
               disabled={creatingUser}
               onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="password" value={password}
               disabled={creatingUser}
                onChange={ev => setPassword(ev.target.value)}/>
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className=" my-4 text-center text-gray-500">
          or login with provider 
        </div>
        <button className=" flex gap-4 justify-center">
        <Image src = {'/google.png'} alt={''} width={24} height={24}/>
        Login with google</button>
      <div className="text-center my-4 text-gray-500 border-t py-4"> Existing account? <Link className="underline italic" href={'/login'}>Login here &raquo;  </Link></div>
      </form>
    </section>
  )
}

export default RegisterPage
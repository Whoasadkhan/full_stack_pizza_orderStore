"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { sighIn } from "next-auth/react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInProgress, setLogInProgress] = useState(false);

  const handleFormsubmit = async (ev) => {
    ev.preventDefault();
    setLogInProgress(true);

    await sighIn("credentials", { email, password, callbackUrl: "/" });

    setLogInProgress(false);
  };
  return (
    <section className="mt-8">
      <h1 className="text-4xl text-primary mb-4 text-center ">Login</h1>{" "}
      <form className="block max-w-xs mx-auto" onClick={handleFormsubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          name={"email"}
          disabled={logInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          name={"password"}
          disabled={logInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={logInProgress}>
          Login
        </button>
        <div className=" my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className=" flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t py-4">
          {" "}
          Existing account?{" "}
          <Link className="underline italic" href={"/login"}>
            Login here &raquo;{" "}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default page;

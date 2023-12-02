"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";


function AuthLinks({status, userName}) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/'} className="whitespace-nowrap">
          Hello, {' '}{userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary border-0 rounded-full text-white px-8 py-2">
          Logout
        </button>

      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
          Register
        </Link>
      </>
    );
  }
}

const Header = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <header className="flex items-center justify-between">
        <nav className=" flex gap-8 items-center text-gray-500 font-semibold">
          <Link className=" text-primary font-semibold text-2xl" href={"/"}>
            <Image src={"/logo.png"} width={200} height={200} />
          </Link>
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className=" flex gap-4 items-center text-gray-500 font-semibold">
          <AuthLinks status={session.status} userName={session?.data?.user?.name}/>
        </nav>
      </header>
    </div>
  );
};

export default Header;

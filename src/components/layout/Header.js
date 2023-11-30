import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
          <Link href={"/login"}>Login</Link>

          <Link
            href={"/register"}
            className=" bg-primary rounded-full text-white px-8 py-2"
          >
            Register 
            
          </Link>
          
        </nav>
      </header>
    </div>
  );
};

export default Header;

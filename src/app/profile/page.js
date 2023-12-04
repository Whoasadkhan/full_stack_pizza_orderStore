"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

const page = () => {
    const session = useSession();
    const {status} = session;

    if(session === 'loading') {
        return 'Loading...'
    }
    if(session === "unauthenticated") {
        return redirect("/login")
    }

    const userImage = session?.data?.user?.image;
  return (
    <section className="mt-8">
        <h1 className="text-4xl text-center text-primary mb-4">Profile</h1>
        <form className="max-w-xs mx-auto ">
            <div>
                <Image src={userImage} width={64} height={64} alt={'avtar'} />
            </div>
        </form>
    </section>
  )
}

export default page
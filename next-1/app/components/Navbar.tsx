import Link from "next/link"
import { auth, signIn, signOut } from "../api/auth/[...nextauth]/route"


const Navbar = async () => {
    const session = await auth()

    return (
        <header className="px-5 py-3 bg-white shadow-md">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <h3 className="p-1 shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 ease-out text-4xl text-gray-300 border-3 rounded-lg border-indigo-900 bg-indigo-900 font-inter">NExt-1</h3>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                'use server';

                                await signOut({ redirectTo: '/' })
                            }}>
                                <button type="submit">Log Out</button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session && session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            'use server';

                            await signIn("github")
                        }}>
                            <button type="submit">Log In</button>
                        </form>
                    )}
                </div>
            </nav>
        </header >
    )
}

export default Navbar
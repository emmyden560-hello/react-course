import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Navbar() {
    const session = await getServerSession(authOptions);

    return (
        <header className="px-6 py-3 bg-white shadow-sm font-inter">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <div className="text-3xl text-purple-900 font-extrabold">
                        𝑬𝑫<span className="text-gray-800">𝒅𝒊𝒓𝒆𝒄𝒕𝒐𝒓𝒚</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 text-black">
                    {session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                'use server';

                                redirect("/api/auth/signout");
                            }}>
                                <button type="submit">Log Out</button>
                            </form>

                            <Link href={`/user/${session.user.email}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            'use server';
                            redirect("/api/auth/signin/github");
                        }}>
                            <button type="submit" className="text-lg font-inter-bold">Log In</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
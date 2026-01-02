import Navbar from "../components/Navbar";
import { Inter, Work_Sans } from 'next/font/google'
import '../globals.css'   // ← fixed import path

// Define your fonts + create CSS variables
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
})

const worksans = Work_Sans({
    subsets: ['latin'],
    variable: '--font-work-sans',      // different name = different variable
    display: 'swap', // important for performance
    weight: ['400', '500', '600', '700'],
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className={`${inter.variable} ${worksans.variable}`}>
            {/* Navbar component will go here */}
            <Navbar />
            {children}
        </main>
    );
}
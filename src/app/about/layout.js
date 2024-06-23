'use client'
import Link from "next/link";
import "./about.css"
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const currentPath = usePathname();
    return (
        <div>
            <ul className="main-about">
                <h2>About Navbar</h2>
                {currentPath !== '/about' &&
                    <li>
                        <Link href='/about'>Back to About</Link>
                    </li>
                }
                <li>
                    <Link href='/about/aboutcollage'>About Collage</Link>
                </li>
                <li>
                    <Link href='/about/aboutstudent'>About Student</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}
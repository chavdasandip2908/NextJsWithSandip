'use client'
import Link from "next/link";

export default function Layout({params}) {
    
    return (
        <div>
            <ul className="main-about">
                <h2>Student Details</h2>
                <div>
                    Name: {params.student}
                </div>
            </ul>
        </div>
    )
}
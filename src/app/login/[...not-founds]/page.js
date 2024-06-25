'use client'

import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h2>This login page is not available</h2>
            <Link href='/'>Go to home page</Link>
        </div>
    )
}
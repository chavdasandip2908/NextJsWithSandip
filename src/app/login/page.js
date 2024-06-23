'use client';

import Link from 'next/link';
import styles from '../page.module.css'

export default function Login() {
    return (
        <main className={styles.main}>
            <div>
                <h1>login Roter</h1>
                <Link href="/">Home</Link>
                <br />
                <Link href="/about">About</Link>

                <br />
                <br />
                <br />
                <br />
                <div>
                    <p>login as  <Link href="/login/student">Student</Link></p>
                    <p>login as  <Link href="/login/teacher">Teacher</Link></p>
                </div>

            </div>
        </main>
    )
}
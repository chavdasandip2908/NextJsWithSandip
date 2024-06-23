'use client';

import Link from 'next/link';
import styles from '../page.module.css'

const about = () => {
    return (
        <main className={styles.main}>
            <div>
            <h1>About roter</h1>
                <Link href="/" >Home</Link>
                <br />
                <Link href="/login" >Login</Link>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <p><Link href="/about/aboutcollage">About Collage</Link></p>
                    <p><Link href="/about/aboutstudent">About Student</Link></p>
                </div>
            </div>
        </main>
    )
}

export default about

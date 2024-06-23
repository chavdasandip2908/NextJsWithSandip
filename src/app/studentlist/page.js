'use client'
import Link from "next/link";

export default function Layout() {

    const students = [
        { name: 'sanjay', id: '1', email: 'sanjay@gmail.com' },
        { name: 'brian', id: '2', email: 'brian@gmail.com' },
        { name: 'rob', id: '3', email: 'rob@gmail.com' },
        { name: 'heck', id: '4', email: 'heck@gmail.com' },
        { name: 'kevin', id: '5', email: 'kevin@gmail.com' },
        { name: 'tim', id: '6', email: 'tim@gmail.com' },
        { name: 'truption', id: '7', email: 'truption@gmail.com' }
    ];
    return (
        <div>
            <h2>Student List</h2>
            <ul >
                {
                    students.map((student, index) => (
                        <li key={index}>
                            <Link href={`/studentlist/${student.name}`}>{student.name}</Link>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

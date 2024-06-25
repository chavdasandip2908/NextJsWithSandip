'use client'

export default function Lecture({ params }) {
    console.log(params.lecture);
    return (
        <h3>
            Day of Collage : {params.lecture[0]}
            <br />
            Lectures No : {params.lecture[1]}
        </h3>
    )
}



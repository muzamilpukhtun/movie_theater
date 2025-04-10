import Link from 'next/link'
import React from 'react'

const CourseList = () => {
  return (
    <div>
         <ul>
        <li>
          <Link href={`/courses/${"dsa"}`}>DSA</Link>
        </li>
        <li>
          <Link href={`/courses/${"java"}`}>Java</Link>
        </li>
        <li>
          <Link href={`/courses/${"mern"}`}>MERN</Link>
        </li>
      </ul>
    </div>
  )
}

export default CourseList

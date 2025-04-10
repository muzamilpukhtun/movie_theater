import React from 'react'

const page = ({ params }) => {
  return (
    <div>
      Welcome to {params.slug} course
    </div>
  )
}

export default page

import React from 'react'

function SectionHeadline({headlineText}) {
  return (
    <div className="w-screen ">
    <h1 className="text-3xl text-center font-extralight section-header">
      {headlineText}
    </h1>
  </div>
  )
}

export default SectionHeadline

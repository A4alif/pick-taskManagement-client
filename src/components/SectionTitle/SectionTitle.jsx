import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div >
      <h2 className="text-3xl md:text-4xl lg:text-5xl single-text-gradient font-bold capitalize">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
import React from 'react'

const SectionContent = ({children}) => {
  return (
    <div className='d-flex gap-4 overflow-y-auto p-3'>
      {children}
    </div>
  )
}

export default SectionContent

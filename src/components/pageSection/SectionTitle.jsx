import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='d-flex flex-row align-items-center gap-3 mb-3'>
        <h3 style={{textWrap:"nowrap"}}>{title}</h3>
        <div style={{width:"100%", height:"1.9px", backgroundColor:"#000"}}></div>
    </div>
  )
}

export default SectionTitle

import React from 'react'
import SectionContent from './SectionContent'
import SectionTitle from './SectionTitle'
import SectionCard from './SectionCard'

const JustInSection = () => {
  return (
    <div>
      <SectionTitle title="Just In"/>
      <SectionContent>
        <SectionCard />
      </SectionContent>
    </div>
  )
}

export default JustInSection

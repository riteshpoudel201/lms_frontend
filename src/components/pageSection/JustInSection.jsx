import React from 'react'
import SectionContent from './SectionContent'
import SectionTitle from './SectionTitle'
import SectionCard from './SectionCard'
import SectionContainer from './SectionContainer'

const JustInSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Just In"/>
      <SectionContent>
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </SectionContent>
    </SectionContainer>
  )
}

export default JustInSection

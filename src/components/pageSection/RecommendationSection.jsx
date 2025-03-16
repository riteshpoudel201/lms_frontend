import React from 'react'
import SectionContent from './SectionContent'
import SectionTitle from './SectionTitle'
import SectionCard from './SectionCard'

const RecommendationSection = () => {
    return (
        <div>
          <SectionTitle title="Recommendation for you"/>
          <SectionContent>
            <SectionCard/>
          </SectionContent>
        </div>
      )
}

export default RecommendationSection

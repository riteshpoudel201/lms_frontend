import React from 'react'
import SectionContent from './SectionContent'
import SectionTitle from './SectionTitle'
import SectionCard from './SectionCard'
import SectionContainer from './SectionContainer'
import { useSelector } from 'react-redux'

const JustInSection = () => {
  const {publicBooks} = useSelector((state)=> state.bookInfo)
  let books=[];
  if(publicBooks.length){
    const sorted  = [...publicBooks].sort((a,b)=> new Date(a.createdAt)-new Date(b.createdAt))
    books = sorted.slice(0,4);
  }

  console.log(books);

  return (
    <SectionContainer>
      <SectionTitle title="Just In"/>
      <SectionContent>
        {
          books.map(book=>(
            <SectionCard key={book._id} {...book}/>
          ))
        }
        {/* <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard /> */}
      </SectionContent>
    </SectionContainer>
  )
}

export default JustInSection

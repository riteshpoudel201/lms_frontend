import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const carouselItems = [
  {
    src: "/slide1.jpg",
    alt: "Library Collection",
    title: "Explore Our Book Collection",
    description: "Find and borrow books from a well-organized library catalog."
  },
  {
    src: "/slide2.jpg",
    alt: "Borrow and Return Books",
    title: "Easy Borrowing & Returns",
    description: "Keep track of borrowed books and return them hassle-free."
  },
  {
    src: "/slide3.jpg",
    alt: "Library Management",
    title: "Efficient Library Management",
    description: "Manage book availability, reservations, and due dates seamlessly."
  },
  {
    src: "/slide4.jpg",
    alt: "Community Engagement",
    title: "Engage with the Library Community",
    description: "Participate in events, book clubs, and knowledge-sharing activities."
  }
];

const CustomCarousel = () => {
  return (
    <Carousel className='mt-4 mb-3'>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.src} alt={item.alt} className="d-block w-100" />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CustomCarousel;

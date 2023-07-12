import React from 'react'
import MultipleSectioins from '../MultipleSections/MultipleSectioins'
import Students from '../StudentsSection/Students'
import Offers from '../Offers/Offers'
import Products from '../Products/Products'
import CarouselImg from '../carouselImg/CarouselImg'
import Menu from '../Menu/Menu'

export default function Home() {
  return (
    <>
      <Menu/>
      <CarouselImg/>
      <Products/>
      <Offers/>
      <Students/>
      <MultipleSectioins/>
    </>
  )
}

import React from "react"

import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import erick from '../../images/slideErick.png'
import aws from '../../images/slideAws.png'
import js from '../../images/slideJs.png'

const Slider = () => {
  return (
    <Carousel
      autoPlay={3000}
      animationSpeed={1000}
      infinite
      dots
      stopAutoPlayOnHover
    >
      <img src={aws} alt="Amazon Web Services" style={{ width: "100%" }} />
      <img src={js} alt="JavaScript" style={{ width: "100%" }} />
      <img src={erick} alt="Erick Wendel" style={{ width: "100%" }} />
    </Carousel>
  )
}
  
export default Slider

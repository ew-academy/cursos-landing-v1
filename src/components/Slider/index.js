import React from "react"

import Carousel, { Dots } from "@brainhubeu/react-carousel"
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
      <img src={aws} style={{ width: "100%" }} />
      <img src={js} style={{ width: "100%" }} />
      <img src={erick} style={{ width: "100%" }} />
    </Carousel>
  )
}
  
export default Slider

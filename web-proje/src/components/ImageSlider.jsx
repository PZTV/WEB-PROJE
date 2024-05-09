import React, { useState } from 'react'
import './slider.css'

function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(newIndex)
  }

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(newIndex)
  }

  return (
    <div className="image-slider-container">
      <button className="slider-button left" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <div className="image-slider">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </div>
      <button className="slider-button right" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  )
}

export default ImageSlider

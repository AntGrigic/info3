import React, { useState } from 'react';
import '../styles/Pixel.scss';

export default function Pixel(props) {
  const { selectedColor } = props;

  const [pixelColor, setPixelColor] = useState("#B8B8B8");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  }

  return (
    <div className="pixel" 
      style={{backgroundColor: pixelColor}}
      onMouseMove={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}>
    </div>
  );
}
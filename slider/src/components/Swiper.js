import React, { useState } from 'react';
import '../styles/Swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  
    const thumbs = [];
    for (let i = 16; i < 26; i++) {
      thumbs.push(
        <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
          <img
            src={`https://picsum.photos/id/${i}/163/100`}
            alt={`Thumbnail ${i}`}
          ></img>
        </SwiperSlide>
      );
    }

    function hideStuff() {
        var element = document.getElementById("thumbs");
        element.classList.toggle("hide");
        console.log(pictureNumber);
    }

    const [pictureNumber, setPictureNumber] = useState(25);

    function Klikni() {
        console.log(pictureNumber);
    }

        const slides = [];
    for (let i = 15; i < pictureNumber; i++) {
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img
            src={`https://picsum.photos/id/${i + 1}/500/300`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
        </SwiperSlide>
      );
    }
  
    return (
      <React.Fragment>
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          tag="section"
          wrapperTag="ul"
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: true}}
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
  
        <Swiper
          id="thumbs"
          spaceBetween={5}
          slidesPerView={3}
          onSwiper={setThumbsSwiper}
        >
          {thumbs}
        </Swiper>
        <div className="container">
            <button onClick={hideStuff} className="button">Show/hide</button>
            <div>
                <span className="text">Enter number between 25 and 64</span>
                <input 
                    type="number" 
                    className="inputNumber"
                    min="16"
                    max="64"
                    defaultValue={pictureNumber} 
                    onClick={(e) => {setPictureNumber(e.target.value)}}
                    />
                <button onClick={Klikni()}>Klikni me</button>
            </div>
        </div>
      </React.Fragment> 
    );
}

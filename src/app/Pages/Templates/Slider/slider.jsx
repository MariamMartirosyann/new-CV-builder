import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TemplateOne from "./SliderItems/Template1";
import  One from "../../../../images/1.png"
import "./style.css"

  function SimpleSlider () {
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 9000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 0,
       cssEase: 'linear',
        pauseOnFocus: true,
        pauseOnHover: true,
        Instant:true,
      };
      return (
        <div>
          <Slider {...settings} className="slider">
            <div className="sliderItem">
              <h3>1</h3>
            </div>
            <div className="sliderItem">
              <h3>2</h3>
            </div>
            <div className="sliderItem">
              <h3>3</h3>
            </div>
            <div className="sliderItem">
              <h3>4</h3>
            </div>
            <div className="sliderItem">
              <h3>5</h3>
            </div>
            <div className="sliderItem">
              <h3>6</h3>
            </div>
            <div className="sliderItem">
              <h3 >7</h3>
            </div>
            <div className="sliderItem">
              <h3 >8</h3>
            </div>
            <div className="sliderItem">
              <h3 >9</h3>
            </div>
          </Slider>
        </div>
      );
    
  }
  export default SimpleSlider
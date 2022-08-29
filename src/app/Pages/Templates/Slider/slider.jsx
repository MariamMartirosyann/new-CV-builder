import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import TemplateOne from "../Template1";
import One from "../../../../images/1.png";
import Two from "../../../../images/10.png";
import Three from "../../../../images/3.png";
import Four from "../../../../images/4.png";
import Five from "../../../../images/5.png";
import Six from "../../../../images/6.png";
import Seven from "../../../../images/7.png";
import Eight from "../../../../images/8.png";
import Nine from "../../../../images/9.png";
import "./style.css"

function SimpleSlider() {

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
    Instant: true,
  };
  return (
    <div>
      <Slider {...settings} className="slider">
        <div className="sliderItem">
          <Link to="/templateOne">
            <img className="img" src={One} alt="One" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Two} alt="Two" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Three} alt="Three" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Four} alt="Four" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Five} alt="Five" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateTwo">
            <img className="img" src={Six} alt="Six" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Seven} alt="Seven" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Eight} alt="Eight" />
          </Link>
        </div>
        <div className="sliderItem">
        <Link to="/templateOne">
            <img className="img" src={Nine} alt="Nine" />
          </Link>
        </div>
      </Slider>
    </div>
  );

}
export default SimpleSlider
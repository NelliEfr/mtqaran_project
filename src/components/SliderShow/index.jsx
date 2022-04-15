import s from "./index.module.css";
import SliderItem from "../SliderItem";
import NextArrow from "../NextArrow";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../sliderData";


const SliderShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    nextArrow: <NextArrow />,
  };
  
  return (
    <div>
      <Slider {...settings}>
        {sliderData.map((item) => (
            <div key={item.id} className={s.container}>
            <SliderItem 
              category={item.category}
              img={item.img}
              title={item.title}
              description={item.description}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderShow;

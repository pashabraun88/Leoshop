"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImgs } from "@/app/utils/images";
import styles from "./HeaderSlider.module.css";

export default function HeaderSlider() {
  let settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.slider_content}>
          <Slider {...settings}>
            {sliderImgs.map((img, index) => (
              <div className={styles.item}>
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  layout="responsive"
                  width={1200}
                  height={200}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

import "./Portfolio.css";
import img1 from "../../img/w1.png";
import img2 from "../../img/w2.png";
import img3 from "../../img/w3.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);
const Portfolio = () => {
  const data = [
    {
      id: 1,
      img: img1,
      github: "https://github.com/adeyemithecoder/adechat",
      title: "adechat",
      demo: "https://adechat.onrender.com",
    },
    {
      id: 2,
      img: img2,
      github: "https://github.com/adeyemithecoder/tailwind-restaurant",
      title: "restaurant-website",
      demo: "https://mathew-restaurant-website.web.app",
    },
    {
      id: 3,
      img: img3,
      github: "https://github.com/adeyemithecoder/e-commerce-app",
      title: "e-commerce-website",
      demo: "https://mathewadeyemi-e-commerce-website.onrender.com/",
    },
  ];
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper
        className='container portfolio-container'
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        spaceBetween={40}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {data.map(({ id, demo, title, img, github }) => (
          <SwiperSlide key={id} className='portfolio-item'>
            <div className='portfolio-item-img'>
              <img src={img} alt={title} />
            </div>
            <h3>{title} </h3>
            <div className='portfolio-item-cta'>
              {" "}
              <a href={github} target='_blank' className='btn'>
                Github
              </a>
              <a href={demo} target='_blank' className='btn btn-primary'>
                Live Demo
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;

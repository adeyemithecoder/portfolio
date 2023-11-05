import "./Testimonial.css";
import img3 from "../../img/w1.png";
import img4 from "../../img/w2.png";
import img5 from "../../img/w3.png";
import img6 from "../../img/m1.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);
const Testimonial = () => {
  const data = [
    {
      img: img3,
      name: "Adeyemi Mathew",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur dolorum et odit esse provident at facere distinctio aliquid! Deserunt eos similique velit at ipsam reprehenderit nobis corrupti sequi cum.",
    },
    {
      img: img6,
      name: "Mathe Abigeal",
      review:
        "Working with [Your Name] has been a fantastic experience. Their proficiency in the MERN stack is truly impressive. They took our project from concept to reality with precision and efficiency. The website they built for us is not only visually stunning but also highly functional, thanks to their expertise. I highly recommend [Your Name] to anyone in need of a top-notch MERN stack developer.",
    },
    {
      img: img5,
      name: "Ige Oluremi",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur dolorum et odit esse provident at facere distinctio aliquid! Deserunt eos similique velit at ipsam reprehenderit nobis corrupti sequi cum.",
    },
    {
      img: img4,
      name: "Femi Afolabi",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur dolorum et odit esse provident at facere distinctio aliquid! Deserunt eos similique velit at ipsam reprehenderit nobis corrupti sequi cum.",
    },
  ];
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonial-container'
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        spaceBetween={40}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {data.map(({ name, review, img }) => (
          <SwiperSlide key={name} className='testimonial'>
            <div className='client-avatar'>
              <img src={img} alt='' />
            </div>
            <h5 className='client-name'> {name} </h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;

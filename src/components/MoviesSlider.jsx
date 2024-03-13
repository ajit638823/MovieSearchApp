import { useEffect, useRef, useState } from "react";
import requests from "../request";
import axios from "../axios";

import styles from "./MoviesSlider.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function MoviesSlider({ title }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [{ trnsEnd, showDetail }, setActive] = useState({
    trnsEnd: null,
    showDetail: false,
  });

  useEffect(() => {
    async function fetchItems() {
      try {
        setIsLoading(true);
        const res = await axios.get(requests[title]);
        setItems(res.data.results.slice(0, 8));
        // console.log(items);
      } catch (error) {
        console.log("error occured with the slider");
      } finally {
        setIsLoading(false);
      }
    }
    fetchItems();
  }, []);
  const swiperRef = useRef();
  const stopSlides = () => swiperRef?.current?.swiper?.autoplay?.stop();
  const startSlides = () => swiperRef?.current?.swiper?.autoplay?.start();

  return (
    <div onMouseEnter={stopSlides} onMouseLeave={startSlides}>
      {!isLoading && (
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 2,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          className="mySwiper"
          ref={swiperRef}
        >
          {items.map((curr, index) => (
            <SwiperSlide key={index}>
              <div
                onMouseEnter={() =>
                  setActive((curr) => ({ ...curr, trnsEnd: index }))
                }
                onTransitionEnd={() =>
                  setActive((curr) => ({ ...curr, showDetail: true }))
                }
                onMouseLeave={() =>
                  setActive((curr) => ({ trnsEnd: null, showDetail: false }))
                }
                style={{ position: "relative" }}
                className={styles.outerDiv}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w500` + curr?.poster_path}
                  alt={index + 1}
                  className={`${styles.slideImg} ${
                    trnsEnd === index
                      ? `${styles.active} ${styles.activeTransition}`
                      : ""
                  } `}
                ></img>
                {showDetail && (
                  <div className={styles.details}>
                    <div className={styles.headings}>
                      <span>
                        <h2>
                          {"release_date" in curr && "title" in curr
                            ? curr.title
                            : curr.name}
                        </h2>
                      </span>
                      <span>Released:{curr.release_date}</span>
                    </div>
                    <p>{curr.overview}</p>
                    <button>
                      {" "}
                      <NavLink
                        to={`/showMovie/${
                          "release_date" in curr && "title" in curr
                            ? "movie"
                            : "tv"
                        }/${curr.id}`}
                      >
                        Open
                      </NavLink>
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default MoviesSlider;

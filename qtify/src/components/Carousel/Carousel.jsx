import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

function Carousel({ data, renderComponent }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <button ref={prevRef} className={styles.navButton}>
                &#10094;
            </button>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {renderComponent(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            <button ref={nextRef} className={styles.navButton}>
                &#10095;
            </button>
        </div>
    );
}

export default Carousel;
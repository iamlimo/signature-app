import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const shows = [
  { title: "PRIME TARGET", image: "/movie-poster.png" },
  { title: "BAD SISTERS", image: "/movie-poster.png" },
  { title: "BAD MONKEY", image: "/movie-poster.png" },
  { title: "PRESUMED INNOCENT", image: "/movie-poster.png" },
  { title: "BLACK BIRD", image: "/movie-poster.png" },
];

export default function MyLibrary() {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-8"
      >
        {shows.map((show, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{show.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

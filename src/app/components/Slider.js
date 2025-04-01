import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Play } from "lucide-react";

const movies = [
  {
    title: "Inception",
    info: "A thief who enters the dreams of others.",
    year: "2010",
    rating: "8.8",
    image:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Interstellar",
    info: "A team of explorers travel through a wormhole in space.",
    year: "2014",
    rating: "8.6",
    image:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "The Dark Knight",
    info: "Batman faces the Joker in Gotham City.",
    year: "2008",
    rating: "9.0",
    image:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

const Slider = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-opacity-60"></div>
              <Image
                src={movie.image}
                alt={movie.title}
                fill={true}
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-10">
                <h2 className="text-4xl font-bold">{movie.title}</h2>
                <p className="text-lg">{movie.info}</p>
                <p className="text-md mt-2">
                  Year: {movie.year} | Rating: {movie.rating}
                </p>
                <div className="mt-4 flex gap-4">
                  <button className="bg-red-600 px-6 py-3 text-white flex items-center gap-2 text-lg font-semibold rounded-lg hover:bg-red-700">
                    <Play className="w-6 h-6" /> Rent Now
                  </button>
                  <button className="bg-gray-700 px-6 py-3 text-white text-lg font-semibold rounded-lg hover:bg-gray-800">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

import { useState } from 'react';
import { HiArrowLeftCircle, HiArrowRightCircle } from 'react-icons/hi2';

export default function Carousel() {
  const imagesData = [
    'https://picsum.photos/id/11/600/400',
    'https://picsum.photos/id/14/600/400',
    'https://picsum.photos/id/17/600/400',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((cur) => (cur === imagesData.length - 1 ? 0 : cur + 1));
  }

  function handlePrevSlide() {
    setCurrentSlide((cur) => (cur === 0 ? imagesData.length - 1 : cur - 1));
  }

  return (
    <section className="py-7">
      <div className="relative mx-auto flex w-[300px] items-center justify-center shadow-lg sm:w-[420px] md:w-[600px]">
        {imagesData.map((item, index) => {
          return (
            <img
              src={item}
              alt="carousel-image"
              key={index}
              className={index === currentSlide ? 'rounded-lg' : 'hidden'}
            />
          );
        })}

        <button
          className="absolute left-4 text-2xl text-emerald-50 drop-shadow-lg md:text-3xl"
          onClick={handlePrevSlide}
        >
          <HiArrowLeftCircle />
        </button>

        <button
          className="absolute right-4 text-2xl text-emerald-50 drop-shadow-lg md:text-3xl"
          onClick={handleNextSlide}
        >
          <HiArrowRightCircle />
        </button>

        <span className="absolute bottom-2 space-x-4">
          {imagesData.map((_, index) => {
            return (
              <button
                key={index}
                className={`h-2 w-2 rounded-full drop-shadow-lg ${index === currentSlide ? 'bg-emerald-50' : 'bg-zinc-400'}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
}

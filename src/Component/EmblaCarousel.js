import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="embla">
      <div className="embla__viewport w-[200px]" ref={emblaRef}>
        <div className="embla__container ]">
          <div className="embla__slide">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e8dd454355a914f1dc8460962e33791c3ad6e04e507440742f7cd0914fc3_640.jpg"
              alt="one"
              className="max-w-32"
            />
          </div>
          <div className="embla__slide">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e3d4444f53b10ff3d8992cc12c30771037dbf85254784c772d7ddc964b_640.jpg"
              alt="two"
              className="max-w-32"
            />
          </div>
          <div className="embla__slide">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e9dc434956ab14f1dc8460962e33791c3ad6e04e507440772872dc9244cc_640.jpg"
              alt="three"
              className="max-w-32"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-x-2">
        {" "}
        <button onClick={scrollPrev}>Prev</button>
        <button onClick={scrollNext}>Next</button>
      </div>
    </div>
    // <div className="embla mx-auto w-[200px]" ref={emblaRef}>
    //   <div className="embla__container">
    //     <div className="embla__slide">
    //       <img
    //         src="https://randomwordgenerator.com/img/picture-generator/57e8dd454355a914f1dc8460962e33791c3ad6e04e507440742f7cd0914fc3_640.jpg"
    //         alt="one"
    //         className="max-w-32"
    //       />
    //     </div>
    //     <div className="embla__slide">
    //       <img
    //         src="https://randomwordgenerator.com/img/picture-generator/55e3d4444f53b10ff3d8992cc12c30771037dbf85254784c772d7ddc964b_640.jpg"
    //         alt="two"
    //         className="max-w-32"
    //       />
    //     </div>
    //     <div className="embla__slide">
    //       <img
    //         src="https://randomwordgenerator.com/img/picture-generator/57e9dc434956ab14f1dc8460962e33791c3ad6e04e507440772872dc9244cc_640.jpg"
    //         alt="three"
    //         className="max-w-32"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

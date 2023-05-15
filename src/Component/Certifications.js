import useEmblaCarousel from "embla-carousel-react";
import React, { useState, useCallback } from "react";
const Certifications = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <div className="subText">
        <button className="subHeading" onClick={handleClick}>
          Certifications
        </button>
        {open && (
          <div className="w-[500px] mx-auto overflow-hidden ">
            <div ref={emblaRef}>
              <div className="flex">
                <div className="emSlide">Slide 1</div>
                <div className="emSlide">Slide 2</div>
                <div className="emSlide">Slide 3</div>
              </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
              {" "}
              Prev{" "}
            </button>{" "}
            <button className="embla__next" onClick={scrollNext}>
              {" "}
              Next{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Certifications;

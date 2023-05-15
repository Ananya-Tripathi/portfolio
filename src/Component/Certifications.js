import useEmblaCarousel from "embla-carousel-react";
import React, { useState, useCallback } from "react";
import image1 from "../images/image-1.jpeg";
import image2 from "../images/image-2.png";
import image3 from "../images/image-3.png";
import image4 from "../images/image-4.png";
import image5 from "../images/image-5.png";
const Certifications = () => {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "image1",
    },
    {
      id: 2,
      src: image2,
      alt: "image2",
    },
    {
      id: 3,
      src: image3,
      alt: "image3",
    },
    {
      id: 4,
      src: image4,
      alt: "image4",
    },
    {
      id: 5,
      src: image5,
      alt: "image5",
    },
  ];

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
              <div className="flex ">
                {images.map((image) => {
                  return (
                    <div className="emSlide">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover h-64 w-86 rounded-md"
                      />
                    </div>
                  );
                })}
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

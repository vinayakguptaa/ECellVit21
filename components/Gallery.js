import React, { useState, useEffect, useCallback } from "react";

import { useEmblaCarousel } from "embla-carousel/react";

import Image from "next/Image";

import { useRecursiveTimeout } from "./useRecursiveTimeout";

import { mediaByIndex } from "../public/galleryImages/index.js";

import galleryStyles from "../styles/Gallery.module.css";

const AUTOPLAY_INTERVAL = 4000;

export default function Gallery() {
  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className={galleryStyles.container} id="gallery">
      <div className={galleryStyles.title}>Gallery</div>

      <div className={galleryStyles.embla}>
        <div className={galleryStyles.embla__viewport} ref={viewportRef}>
          <div className={galleryStyles.embla__container}>
            {slides.map((index) => (
              <div className={galleryStyles.embla__slide} key={index}>
                <div className={galleryStyles.embla__slide__inner}>
                  <Image
                    className={galleryStyles.embla__slide__img}
                    src={mediaByIndex(index)}
                    alt="Gallery"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

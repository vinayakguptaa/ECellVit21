import { useState, useCallback } from "react";

import Image from "next/image";

import galleryStyles from "../styles/Gallery.module.css";

import { mediaByIndex } from "../public/galleryImages/index.js";

import ImageViewer from "react-simple-image-viewer";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    mediaByIndex(1),
    mediaByIndex(2),
    mediaByIndex(3),
    mediaByIndex(4),
    mediaByIndex(5),
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={galleryStyles.mainContainer} id="gallery">
      <div className={galleryStyles.title}>
        <a href="#home">Gallery</a>
      </div>
      <div className={galleryStyles.container}>
        <div className={galleryStyles.imageMainContainer}>
          {images.map((src, index) => (
            <div className={galleryStyles.imageItemContainer} key={index}>
              <Image
                src={src}
                onClick={() => openImageViewer(index)}
                width="384px"
                height="216px"
                key={index}
                alt=""
                // layout="fill"
                className={galleryStyles.imageItem}
              />
            </div>
          ))}
        </div>

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
}

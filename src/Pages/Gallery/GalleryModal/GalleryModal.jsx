import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import { Button, Icon } from "semantic-ui-react";
import { imagesGallery } from "../../../Backend/Data";
import styles from "./GalleryModal.module.scss";

const GalleryModal = ({ id }) => {
  const [imgIndex, setImgIndex] = useState(id);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
	};
	
	console.log(id, imgIndex)

  return (
    <>
      <Button
        className={styles.galleryModalButton}
        onClick={() => handleClose()}
      >
        <Icon name="plus" size="small" className={styles.galleryModalIcon} />
      </Button>

      {open && (
        <Lightbox
          mainSrc={imagesGallery[imgIndex-1].url}
          nextSrc={imagesGallery[(imgIndex + 1) % imagesGallery.length].url}
          prevSrc={
            imagesGallery[
              (imgIndex + imagesGallery.length - 1) % imagesGallery.length
            ].url
          }
          onCloseRequest={() => handleClose()}
          onMovePrevRequest={() =>
            setImgIndex(
              (imgIndex + imagesGallery.length - 1) % imagesGallery.length
            )
          }
          onMoveNextRequest={() =>
            setImgIndex((imgIndex + 1) % imagesGallery.length)
          }
        />
      )}
    </>
  );
};

export default GalleryModal;

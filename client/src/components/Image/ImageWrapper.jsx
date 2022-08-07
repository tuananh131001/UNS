import React, { useState } from "react";
import { useDeletePhoto } from "../../hooks/useFetch";
import { StyledDeleteButton } from "../Button/DeleteButton.style";
import { StyledImageWrapper } from "../MasonryLayout/Masonry.style";
import { Image } from "../MasonryLayout/Masonry.style";
import PropTypes from "prop-types";
import { StyledText } from "./Text.style";
import { BlurBackground } from "../Form/BlurBackground.styled";
import DeleteForm from "../DeleteForm/DeleteForm";
ImageWrapper.propTypes = {
  photo: PropTypes.any,
};
function ImageWrapper({ photo }) {
  const [isHoverImage, setHoverImage] = useState(false);
  const [isDeleteFormOpen, setDeleteFormOpen] = useState(false);

  const mutation = useDeletePhoto();
  const handleDelete = (_id) => {
    setDeleteFormOpen(true)
    // mutation.mutate(_id)
  };
  return (
    // When hover set state to appear or hide the button delete
    <StyledImageWrapper
      onMouseOver={() => {
        setHoverImage(true);
      }}
      onMouseLeave={() => {
        setHoverImage(false);
      }}
    >
      
      {isDeleteFormOpen ? <DeleteForm></DeleteForm> : null}

      {isHoverImage ? (
        <>
          
          <BlurBackground></BlurBackground>
          <StyledDeleteButton onClick={() => handleDelete(photo._id)}>
            delete
          </StyledDeleteButton>

          <StyledText>{photo.name}</StyledText>
        </>
      ) : null}
      <Image src={photo.url}></Image>
    </StyledImageWrapper>
  );
}

export default ImageWrapper;

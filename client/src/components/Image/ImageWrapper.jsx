import React, { useState } from "react";
import { useDeletePhoto } from "../../hooks/useFetch";
import { StyledDeleteButton } from "../Button/DeleteButton.style";
import { StyledImageWrapper } from "../Layout/MasonryLayout/Masonry.style";
import { Image } from "../Layout/MasonryLayout/Masonry.style";
import PropTypes from "prop-types";
import { StyledText } from "./Text.style";
import { BlurBackground } from "../Form/BlurBackground.styled";
ImageWrapper.propTypes = {
  photo: PropTypes.any,
};
function ImageWrapper({ photo }) {
  const [isHoverImage, setHoverImage] = useState(false);

  const mutation = useDeletePhoto();
  const handleDelete = (_id) => mutation.mutate(_id);
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
      <Image src={photo.url}></Image>
      

      {isHoverImage ? (
        <>
          <BlurBackground></BlurBackground>
          <StyledDeleteButton onClick={() => handleDelete(photo._id)}>
            delete
          </StyledDeleteButton>
          <StyledText>{photo.name}</StyledText>
        </>
      ) : null}
    </StyledImageWrapper>
  );
}

export default ImageWrapper;

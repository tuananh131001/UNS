import React, { useState } from "react";
import { useDeletePhoto } from "../../hooks/useFetch";
import { StyledDeleteButton } from "../Button/DeleteButton.style";
import { StyledImageWrapper } from "../MasonryLayout/Masonry.style";
import { Image } from "../MasonryLayout/Masonry.style";
import PropTypes from "prop-types";
import { StyledText } from "./Text.style";
import { BlurBackground } from "../Form/BlurBackground.styled";
import { useDispatch } from "react-redux";
import { toggleModal, setId } from "../../features/popupSlice";
ImageWrapper.propTypes = {
  photo: PropTypes.any,
};
function ImageWrapper({ photo }) {
  const [isHoverImage, setHoverImage] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (_id) => {
    dispatch(toggleModal());
    // mutation.mutate(_id)
    dispatch(setId(photo._id));
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
      {isHoverImage ? (
        <>
          <BlurBackground></BlurBackground>
          <StyledDeleteButton onClick={() => handleDelete()}>
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

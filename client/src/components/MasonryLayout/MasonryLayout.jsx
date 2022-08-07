import React from "react";
import { useGetPhotos } from "../../hooks/useFetch";
import ImageWrapper from "../Image/ImageWrapper";
import { Mansory } from "./Masonry.style";

function MasonryLayout() {
  const { data: jobs, status } = useGetPhotos();

  if (status == "loading") {
    return <p>Loading...</p>;
  }
  if (status == "error") {
    return <p>Error...</p>;
  }

  return (
    <div>
      <Mansory>
        {jobs.data?.map((photo) => (
          <ImageWrapper photo={photo} key={photo._id}></ImageWrapper>
        ))}
      </Mansory>
    </div>
  );
}

export default MasonryLayout;

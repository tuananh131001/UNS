import React from "react";
import { useGetPhotos } from "../../../hooks/useFetch";
import { Mansory, Image } from "./Masonry.style";

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
        {jobs.data.map((photo) => (
          <Image src={photo.url} key={photo.name}></Image>
        ))}
      </Mansory>
    </div>
  );
}

export default MasonryLayout;

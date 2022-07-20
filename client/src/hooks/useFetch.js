import { getAllPhotos } from "../api/photoAPI";

import { useQuery } from "@tanstack/react-query";

// Custom hook get photo
const useGetPhotos = (onSuccess, onError) => {
  return useQuery(["photos"], getAllPhotos, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export { useGetPhotos }

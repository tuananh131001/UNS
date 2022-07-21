import { getAllPhotos, postPhoto } from "../api/photoAPI";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Custom hook get photo
const useGetPhotos = (onSuccess, onError) => {
  return useQuery(["photos"], getAllPhotos, {
    onSuccess: onSuccess,
    onError: onError,
  });
};
const useCreatePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation(postPhoto, {
    onSuccess: (newData) => {
      //  queryClient.invalidateQueries(["photos"])
      queryClient.setQueryData(["photos"], (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, newData.data],
        };
      });
    },
  });
};

export { useGetPhotos, useCreatePhoto };

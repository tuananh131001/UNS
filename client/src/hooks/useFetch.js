import { getAllPhotos, postPhoto, deletePhoto } from "../api/photoAPI";

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
    onSuccess: () => {
      queryClient.invalidateQueries(["photos"]);
      // queryClient.setQueryData(["photos"], (oldData) => {
      //   return {
      //     ...oldData,
      //     data: [...oldData.data, newData.data],
      //   };
      // });
    },
  });
};
const useDeletePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePhoto, {
    onSuccess: () => {
      queryClient.invalidateQueries(["photos"]);
    },
  });
};
export { useGetPhotos, useCreatePhoto, useDeletePhoto };

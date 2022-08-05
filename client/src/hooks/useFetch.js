import {
  getAllPhotos,
  postPhoto,
  deletePhoto,
  getPhotoByName,
} from "../api/photoAPI";

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
    //https://www.youtube.com/watch?v=XI0SN5AI6YA&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=23
    onSuccess: (data) => {
      // queryClient.setQueryData(["photos"], (oldQueryData) => {
      //   return {
      //     ...oldQueryData,
      //     data: [...oldQueryData.data, data.data]
      //   };
      // });

      queryClient.invalidateQueries(["photos"]);
    },
  });
};

const useGetPhotoByName = () => {
  const queryClient = useQueryClient();
  return useMutation(getPhotoByName, {
    onSuccess: (data) => {
      queryClient.setQueryData(["photos"], () => {
        return data;
      });
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
export { useGetPhotos, useCreatePhoto, useDeletePhoto ,useGetPhotoByName};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useGetUsers = () => {
  const {
    data: allUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const data = await axios.get(`${import.meta.env.VITE_SEVER_PORT}/users`);
      return data?.data;
    },
  });
  return [allUser, isLoading, refetch];
};

export default useGetUsers;

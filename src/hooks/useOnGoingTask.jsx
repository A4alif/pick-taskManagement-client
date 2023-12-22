import React, { useContext } from 'react'
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useOnGoingTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const {
      data: taskOn = [],
      isPending: isLoadingg,
      refetch,
    } = useQuery({
      queryKey: ["tasksongoing"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/mytask-cart?email=${user?.email}`);
        return res.data.result;
      },
    });
  return [taskOn, isLoadingg];
}

export default useOnGoingTask
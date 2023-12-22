import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { data: tasks = [], isPending: isLoading, refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/tasks');
            return res.data.result;
        }
    })
  return [tasks, isLoading, refetch];
}

export default useAllTasks
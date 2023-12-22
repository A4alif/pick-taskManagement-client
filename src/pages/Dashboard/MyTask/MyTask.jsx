import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyPostedTask from "../MyPostedTask/MyPostedTask";
import useOnGoingTask from "../../../hooks/useOnGoingTask";
import MyOnGoingTask from "../MyOnGoingTask/MyOnGoingTask";

const MyTask = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const[taskOn, isLoadingg] = useOnGoingTask();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const {
    data: tasks = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${user?.email}`);
      return res.data.result;
    },
  });

   
 

  return (
    <>
      <div>
        <div className="mb-9">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl single-text-gradient font-semibold text-center mt-9">
            My Tasks
          </h2>
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <h2 className="text-xl p-2 text-purple-700  border-2 border-purple-200">
                My Posted Tasks
              </h2>
            </Tab>
            <Tab>
            <h2 className="text-xl p-2 text-purple-700  border-2 border-purple-200">
               On Going Tasks
              </h2>
            </Tab>
            <Tab>
              <h2 className="text-xl p-2 text-purple-700  border-2 border-purple-200">
                Completed Task
              </h2>
            </Tab>
          </TabList>
          <TabPanel>
            <MyPostedTask
              tasks={tasks}
              isLoading={isLoading}
              refetch={refetch}
            />
          </TabPanel>
          <TabPanel>
            <MyOnGoingTask tasks={taskOn} isLoading={isLoadingg} />
          </TabPanel>
          <TabPanel>
            <p>implement later</p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default MyTask;

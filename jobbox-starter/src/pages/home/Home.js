import React from "react";
import { useGetPostQuery, useGetPhotosQuery } from "../../features/RTK_Query_Api";
import Landing from "./Landing";

const Home = () => {
  const { data, error, isLoading } = useGetPostQuery()
  const { data: d, error: e, isLoading: l } = useGetPhotosQuery()
  return <Landing />;
};

export default Home;

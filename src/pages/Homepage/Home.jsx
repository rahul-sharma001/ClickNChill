import React from "react";
import Featured from "../../Components/featured/featured";
import List from "../../Components/list/list";
import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import requests from "../../requests";
const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List
        fetchUrl={requests.fetchComedyMovies}
        listTitle="Continue Watching"
      />
      <List fetchUrl={requests.fetchTrending} listTitle="Trending" />
      <List fetchUrl={requests.fetchPopular} listTitle="Popular" />
      <List fetchUrl={requests.fetchTopRated} listTitle="Top Rated" />
      <List fetchUrl={requests.fetchUpcoming} listTitle="Upcoming" />
    </div>
  );
};

export default Home;
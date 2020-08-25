import React, { useState, useEffect } from "react";
import Data from "./colleges.json";
import Card from "./components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function App() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(10);
  useEffect(() => {
    setList(Data.colleges.slice(0, count));
  }, [count]);

  function fetchMoreData() {
    console.log("fetched");
    setCount((prev) => prev + 10);
    console.log(list);
  }
  return (
    <div className="container">
      <header>Colleges in North India</header>
      <InfiniteScroll
        className="grid"
        dataLength={list.length}
        next={fetchMoreData}
        hasMore={true}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {list.map((college, index) => {
          return (
            <Card
              key={index}
              background={college.image}
              tags={college.tags.map((item, index) => {
                return (
                  <span className="tag" key={index}>
                    {item}
                  </span>
                );
              })}
              ranking={college.ranking}
              rating={college.rating}
              ratingRemark={college.rating_remarks}
              title={college.college_name}
              star={college.rating}
              nearestPlace={college.nearest_place.map((item, index) => {
                return (
                  <span className="place" key={index}>
                    {item}
                  </span>
                );
              })}
              famous={college.famous_nearest_places}
              originalFees={college.original_fees}
              discount={college.discount}
              fees={college.discounted_fees}
              cycle={college.fees_cycle}
              offerText={college.offertext}
              ameneties={college.amenties.map((item, index) => {
                return (
                  <span className="service" key={index}>
                    {item}
                  </span>
                );
              })}
              promoted={college.promoted}
            />
          );
        })}
      </InfiniteScroll>
      {/* <div className="grid">
        {colleges.map((college, index) => {
          return (
            <Card
              key={index}
              background={college.image}
              tags={college.tags.map((item, index) => {
                return (
                  <span className="tag" key={index}>
                    {item}
                  </span>
                );
              })}
              ranking={college.ranking}
              rating={college.rating}
              ratingRemark={college.rating_remarks}
              title={college.college_name}
              star={college.rating}
              nearestPlace={college.nearest_place.map((item, index) => {
                return (
                  <span className="place" key={index}>
                    {item}
                  </span>
                );
              })}
              famous={college.famous_nearest_places}
              originalFees={college.original_fees}
              discount={college.discount}
              fees={college.discounted_fees}
              cycle={college.fees_cycle}
              offerText={college.offertext}
              ameneties={college.amenties.map((item, index) => {
                return (
                  <span className="service" key={index}>
                    {item}
                  </span>
                );
              })}
              promoted={college.promoted}
            />
          );
        })}
      </div> */}
    </div>
  );
}

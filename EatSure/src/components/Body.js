import ResCard from "./ResCard";
import { resobj } from "../utils/mockData";
import { useState } from "react";
// Body
const Body = () => {
  const [topRated, setTopRated] = useState(resobj);

  let FilteredData = topRated.filter((res) => {
   return  res.info.avgRatingString > 3.9;
 });
  return (
    <div className="body mt-4 pb-3">
      <div className="container">
        <div className="row justify-content-center text-center  mb-3">
          <div className="col-lg-10">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <button className="search-btn">Search</button>
            </div>
            <div className="filter-tags">
              <button
                className="rated-btn primary-btn"
                onClick={() => {             
                  setTopRated(FilteredData);
                }}
              >
                Top Rated
              </button>
            </div>
          </div>
        </div>
        <div className="row res-container g-4">
          {topRated.map((resturant) => (
            <ResCard key={resturant.id} resList={resturant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;

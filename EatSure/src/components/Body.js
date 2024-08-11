import ResCard from "./ResCard";
import { resobj } from "../utils/mockData";
import ShimmerUi from "./ShimmerUi";
import { useEffect, useState } from "react";
// Body
const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");


  
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8092428&lng=86.1624587"
    );
    const jsonData = await data.json();
    const restaurants =
      jsonData.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturantList(restaurants);
    console.log(resturantList)
  };

  let FilteredData = resturantList.filter((res) => {
    return res.info.avgRatingString > 3.9;
  });



  let filteredCards = () => {
   const searchFilter= resturantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResturantList(searchFilter);
  };



  if (resturantList.length === 0) {
    return <ShimmerUi />;
  }


  return (
    <div className="body mt-4 pb-3">
      <div className="container">
        <div className="row justify-content-center text-center  mb-3">
          <div className="col-lg-10">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="search-btn" onClick={(filteredCards)}>
                Search
              </button>
            </div>
            <div className="filter-tags">
              <button
                className="rated-btn primary-btn"
                onClick={() => {
                  setResturantList(FilteredData);
                }}
              >
                Top Rated
              </button>
            </div>
          </div>
        </div>
        <div className="row res-container g-4">
          {resturantList.map((resturant) => (
            <ResCard key={resturant.info.id} resList={resturant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;

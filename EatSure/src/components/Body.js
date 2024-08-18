import ResCard from "./ResCard";
import { resobj } from "../utils/mockData";
import ShimmerUi from "./ShimmerUi";
import { useEffect, useState } from "react";
// Body
const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData,setFilteredData]= useState([]);

  
  useEffect(() => {
    fetchData();
  }, []);

// https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8092428&lng=86.1624587
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8092428&lng=86.1624587"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    const restaurants =
      await jsonData.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle  ?.restaurants;
    setResturantList(restaurants || []);
    setFilteredData(restaurants || []);
  };

  let FilterRating = ()=>{ 
    const highRated =resturantList.filter((res) => {
     return  res.info.avgRatingString > 4.5;
  });
  setFilteredData(highRated);
}



  let filteredCards = () => {
   const searchFilter= resturantList.filter((res) =>{
      return res.info.name.toLowerCase().includes(searchText.toLowerCase())
  });
    setFilteredData(searchFilter);
  };



  return  resturantList.length===0?(<ShimmerUi />):(
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
              <button className="search-btn" onClick={filteredCards}>
                Search
              </button>
            </div>
            <div className="filter-tags">
              <button
                className="rated-btn primary-btn"
                onClick={FilterRating}
              >
                Top Rated
              </button>
            </div>
          </div>
        </div>
        <div className="row res-container g-4">
          {filteredData.map((resturant) => (
            <ResCard key={resturant.info.id} resList={resturant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;

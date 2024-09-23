import ResCard, {ResCardPromoted} from "./ResCard";
import { resobj } from "../utils/mockData";
import ShimmerUi from "./ShimmerUi";
import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';

// Body
const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData,setFilteredData]= useState([]);
  // const [promotedData,setPromotedData] =useState("false");
  // setPromotedData(ResCardPromoted(ResCard));
  const PromotedData= ResCardPromoted(ResCard);
  const {resId}=useParams();
  useEffect(() => {
    fetchData();
  }, []);

// https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8092428&lng=86.1624587
  const fetchData = async () => {

    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?llat=22.8092428&lng=86.1624587&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonData = await data.json();
    console.log(jsonData);
    const restaurants =
      await jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle  ?.restaurants;
    setResturantList(restaurants || []);
    setFilteredData(restaurants || []);
   

  };
  let FilterRating = ()=>{ 
    const highRated =resturantList.filter((res) => {
     return  res.info.avgRatingString >= 4.5;
  });
  setFilteredData(highRated);
}



  let filteredCards = () => {
   const searchFilter= resturantList.filter((res) =>{
      return res.info.name.toLowerCase().includes(searchText.toLowerCase())
  });
    setFilteredData(searchFilter);
  };

  console.log(filteredData);
  // console.log(filteredData[0].info);
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
              <button className="search-btn bg-blue-500" onClick={filteredCards}>
                Search
              </button>
            </div>
            <div className="filter-tags">
              <button
                className="rated-btn  px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                onClick={FilterRating}
              >
                Top Rated
              </button>
            </div>
          </div>
        </div>
        <div className="row res-container g-4">
          {filteredData.map((restaurant) => (
           restaurant.info.aggregatedDiscountInfoV3  ? (
            <PromotedData key={restaurant.info.id} resList={restaurant} />
          ) : (
            <ResCard key={restaurant.info.id} resList={restaurant} />
          )
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;

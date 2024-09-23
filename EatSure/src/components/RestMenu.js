import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { IMAGE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryItem from "./CategoryItem";
import {
  faStar,
  faLocation,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const RestMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams();

  const resInfo= useRestrauntMenu(resId); //custom hook
  const onlineStatus= useOnlineStatus();
console.log(resInfo);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8092428&lng=86.1624587&restaurantId="+resId)
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8092428&lng=86.1624587&restaurantId=" + resId
  //   );

  //   const jsonData = await data.json();
  //   console.log(jsonData)
  //   setResInfo(jsonData);
  // };
  if(onlineStatus==false)
  {
    return (
      <>
      <p>Loooks Like you are Offline</p>
      </>
    )
  }
  if (resInfo == null) return <ShimmerUi />;
  const {
    name='',
    cuisines = [],
    costForTwoMessage = '',
    feeDetails = {},
    locality = '',
    avgRating = 'N/A',
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};
  
  const itemCategory = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });
   
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-2xl mb-4 font-bold">{name}</h1>
            <div className="top-box shadow-lg mb-12">
              <div className="rating">
                <p className="font-bold text-base"><FontAwesomeIcon className="text-yellow-400"  icon={faStar}/> {avgRating}+Rating</p>
                <p className="font-bold text-base">{costForTwoMessage}</p>
              </div>
              <p className="font-bold text-base text-yellow-400"><FontAwesomeIcon className="text-yellow-400"  icon={faUtensils}/>  {cuisines.join(',')}</p>
              <p className="font-bold text-base"><FontAwesomeIcon className="text-yellow-400"  icon={faLocation}/> {locality}</p>
              <span>{feeDetails.message}</span>
            </div>
            {itemCategory.map((item)=>{
             return(
              <CategoryItem key={item.card.card.title} category={item.card.card}/>
             )
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RestMenu;

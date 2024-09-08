import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { IMAGE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams();

  const resInfo= useRestrauntMenu(resId); //custom hook
  const onlineStatus= useOnlineStatus();

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
    info = {},
    cuisines = [],
    costForTwo = 0,
    feeDetails = {},
    locality = '',
    avgRating = 'N/A',
  } = resInfo?.data?.cards?.[2]?.card?.card || {};
  
  const itemCards = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
  console.log(itemCards)  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1>{info.name}</h1>
            <div className="top-box">
              <div className="rating">
                <p>{avgRating}+Rating</p>
                <p>Rs{costForTwo / 100}</p>
              </div>
              <p>{cuisines.join(',')}</p>
              <p>{locality}</p>
              <span>{feeDetails.message}</span>
            </div>
            {itemCards.map((item)=>{
             return(
                <div className="menu-item" key={item.card.info.id}>
                <div className="_menu">
                    <h4>{item.card.info.name}</h4>
                    <p>Rs{item.card.info.price/100}</p>
                    <p>{item.card.info.description}</p>
                </div>
                <div className="_image">
                    <img  src={IMAGE_URL + "/"+ item.card.info.imageId}/>
                </div>
            </div>
             )
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RestMenu;

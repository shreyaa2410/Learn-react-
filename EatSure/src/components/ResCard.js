import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUtensils,
  faRupeeSign,
  faTag,
  faLocation,
  faClock,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

// resturant card
const ResCard = (props) => {
  const { resList } = props;
  if (!resList || !resList.info) return null; // Handle case where data is missing

  const {
    cuisines,
    id,
    name,
    areaName,
    sla,
    cloudinaryImageId,
    avgRatingString,
    costForTwo,
  } = resList?.info || [];
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <Link to={"resturants" + "/" + id}>
        <div className="cards">
          <div className="cards__img">
            <img src={IMAGE_URL + "/" + cloudinaryImageId} alt={name} />
          </div>
          <div className="cards__content">
            <h3 className="headline pb-3 font-bold text-center">{name}</h3>
            <h4 className="type pb-2">
              <FontAwesomeIcon icon={faUtensils} className="text-yellow-500" />{" "}
              {cuisines.join(", ")}
            </h4>
            <h4 className="rating pb-2">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />{" "}
              {avgRatingString} Rating
            </h4>
            <p className="cost pb-2">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="text-yellow-500"
              />{" "}
              {costForTwo}
            </p>
            <p className="location pb-2">
              <FontAwesomeIcon icon={faLocation} className="text-yellow-500" />{" "}
              {areaName} Area
            </p>
            <p className="duration pb-2">
              <FontAwesomeIcon icon={faClock} className="text-yellow-500" />{" "}
              {sla.deliveryTime} minutes
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Higher Order Component that is taking ResCard to modify it based on condition without affecting the actual rescard
export const ResCardPromoted = (ResCard) => {
  return (props) => {
    const { resData } = props;
    // jsx code for rescardpromoted component
    const { aggregatedDiscountInfoV3} = resData?.info || {};
    // {`${aggregatedDiscountInfoV3?.header || ''} ${aggregatedDiscountInfoV3?.subHeader || ''}`}
    return (
      <>
        <div className="absolute bottom-0 left-0 w-12/4-lg bg-black bg-opacity-50 text-white font-bold p-2 text-center rounded-b-lg text-xs truncate">
        <span >Heello</span>
        </div>
        <ResCard {...props}/>
      </>
    );
  };
};

export default ResCard;

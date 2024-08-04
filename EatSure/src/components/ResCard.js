import { IMAGE_URL } from "../utils/constants";
// resturant card
const ResCard = (props) => {
    const { resList } = props;
    if (!resList || !resList.info) return null; // Handle case where data is missing
  
    const { cuisines, name, areaName, sla, cloudinaryImageId,avgRatingString } = resList.info;
  
    return (
      <div className="col-12 col-md-6 col-lg-3">
        <div className="cards">
          <div className="cards__img">
            <img
              src={IMAGE_URL + '/'+  cloudinaryImageId}
              alt={name}
            />
          </div>
          <div className="cards__content">
            <h3 className="headline">{name}</h3>
            <h4 className="type">{cuisines.join(", ")}</h4>
            <h4 className="rating">{avgRatingString} Rating</h4>
            <p className="location">{areaName} Area</p>
            <p className="duration">{sla.deliveryTime} minutes</p>
          </div>
        </div>
      </div>
    );
  };

  export default ResCard;
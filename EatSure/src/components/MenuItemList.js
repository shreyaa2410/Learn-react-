import { IMAGE_URL } from "../utils/constants";
const MenuItemList = ({ list }) => {
  return (
    <div className="menu-item" key={list.card.info.id}>
      <div className="row justify-between">
        <div className="col-7 col-lg-7">
          <div className="_menu">
            <h3 className="font-semibold text-lg mb-2">
              {list.card.info.name}
            </h3>
            <p className="mb-2 text-base text-gray-600 font-semibold">
              Rs 
               {list.card.info.price
                ? list.card.info.price / 100
                : list.card.info.defaultPrice / 100}
            </p>
            <p className="desc text-sm text-gray-600 mb-4">
              {list.card.info.description}
            </p>
          </div>
        </div>
        <div className="col-5 col-lg-3">
          <div className="_image">
            <img className="rounded-lg" src={IMAGE_URL + "/" + list.card.info.imageId} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuItemList;

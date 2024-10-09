import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { Add_Item } from "../utils/cartSlice";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const MenuItemList = ({ list }) => {
  const dispatch= useDispatch();
  console.log(list);
  const handleItem=()=>{
    dispatch(Add_Item(list));
    toast.success(
      <div className="flex items-center">
        {/* <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> */}
        Item added to Cart Successfully!
      </div>
    );
  }
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
          <div className="_image relative">
            <img className="rounded-lg" src={IMAGE_URL + "/" + list.card.info.imageId} />
            <div className="absolute bottom-0 right-0">
            <button className="bg-green-500 hover:bg-green-700 font-bold text-white px-4 py-2 rounded"
            onClick={handleItem}>Add + </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuItemList;

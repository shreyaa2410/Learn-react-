import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { Clear_Item } from "../utils/cartSlice";

const Cart=()=>{
  const cartItem= useSelector((store)=> store.cart.items)
  const dispatch = useDispatch();
  const handleClear=()=>{
    dispatch(Clear_Item(cartItem));
  }
  console.log(cartItem);
    return(
        <>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full text-center">
              <h1 className="text-2xl font-bold">Cart</h1>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-700 font-bold text-white px-4 py-2 rounded"
            onClick={handleClear}>Clear Cart</button>
          </div>
          <div className="pt-24">
           {
            cartItem.length==0 ?(<div className="p-3 bg-blue-200 rounded-lg"><h2 className="text-center font-semibold text-blue-600">No Items in the cart. Please add items</h2></div>):(
            cartItem.map((list,index)=>{
              return <MenuItemList key={index} list={list}/>
            }))
           }
          </div>
        </div>
      </>
    )
}
export default Cart;
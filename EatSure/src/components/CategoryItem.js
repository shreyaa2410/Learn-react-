import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import MenuItemList from "./MenuItemList";
import { list } from "postcss";
import { useState } from "react";
const CategoryItem = ({ category }) => {
  const [showItems, setShowItems] = useState(false);
  const { title } = category;
  const handleAccordion = () => {
    setShowItems(!showItems);
  };
  console.log(showItems)
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="shadow-md p-3 mb-4 rounded-lg">
              <div className="flex justify-between cursor-pointer" onClick={handleAccordion}>
                <h2 className="text-base font-bold">{title}</h2>
                <div>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              { showItems  && (
                <div>
                  {category?.itemCards?.map((list, index) => {
                    console.log(list);
                    return <MenuItemList key={index} list={list} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;

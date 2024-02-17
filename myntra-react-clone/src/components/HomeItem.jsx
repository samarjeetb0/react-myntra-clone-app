import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

export const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const itemFound = bag.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
        </div>
        {itemFound ? (
          <button
            className="btn btn-add-bag btn-danger"
            onClick={handleAddToBag}
          >
            Remove
          </button>
        ) : (
          <button
            className="btn btn-add-bag btn-success"
            onClick={handleAddToBag}
          >
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { BagItem } from "../components/BagItem";
import { BagSummary } from "../components/BagSummary";

export const Bag = () => {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  const finalItems = items.filter((item) => bag.indexOf(item.id) >= 0);
  // const finalItems = items.filter((item) => {
  //  const idx = bag.indexOf(item.id);
  //  return idx >=0
  // });
  //console.log("finalItems: ", finalItems);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

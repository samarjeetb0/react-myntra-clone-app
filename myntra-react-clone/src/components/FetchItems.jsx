import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

/**
 * this component has no ui but has some logic in it, this is called dumb component
 * @returns
 */
export const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch(`http://localhost:3000/items`, { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // console.log(items.items[0])
        //console.log(items[0])
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
    
  }, [fetchStatus]);

  return <></>;
};

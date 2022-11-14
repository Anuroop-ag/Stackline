import { SORT, FETCH } from "../../constants";
import { data } from "./data";
export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};

export const fetchAction = data => {
  return {
    type: FETCH,
    data
  };
};

export function fetchData() {
  return dispatch => { return dispatch(fetchAction(data));
  };
}

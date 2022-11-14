import { combineReducers } from "redux";
import { SORT, FETCH, COLUMN_ORDER } from "../../constants";

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH:
      return action.data;
    case SORT:
      if (Object.getOwnPropertyNames(state).length > 0) {
        const key = action.key;
        const sales = state.sales.map(salesObj => {
          return Object.assign({}, salesObj);
        });
        let sortedSales;
        if (key === "weekEnding") {
          sortedSales = sales.sort(
            (a, b) =>
              COLUMN_ORDER[key] === "asc"
                ? new Date(b[key]).getTime() - new Date(a[key]).getTime()
                : new Date(a[key]).getTime() - new Date(b[key]).getTime()
          );
        } else {
          sortedSales = sales.sort(
            (a, b) =>
              COLUMN_ORDER[key] === "asc" ? b[key] - a[key] : a[key] - b[key]
          );
        }

        COLUMN_ORDER[key] = COLUMN_ORDER[key] === "asc" ? "desc" : "asc";
        return Object.assign({}, state, { sales: sales });
      } else {
        return state;
      }

    default:
      return state;
  }
};

const reducer = combineReducers({
  data: dataReducer
});

export default reducer;

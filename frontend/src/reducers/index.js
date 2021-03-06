import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import categoryReducer from "./categoryReducer";
import billsReducer from "./billsReducer";
import purchasesReducer from "./purchasesReducer";
import purchaseReducer from "./purchaseReducer";
import userReducer from "./userReducer";
import purchasesWithCategoryReducer from "./purchasesWithCategoryReducer";

export default combineReducers({
  categories: categoriesReducer,
  bills: billsReducer,
  purchases: purchasesReducer,
  purchase: purchaseReducer,
  user: userReducer,
  category: categoryReducer,
  purchasesWithCategory: purchasesWithCategoryReducer,
});

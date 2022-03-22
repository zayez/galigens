import { combineReducers } from "redux"

import roversReducer from "./roversReducer"
import filtersReducer from "./filtersReducer"
import photosReducer from "./photosReducer"

const rootReducer = combineReducers({
  rovers: roversReducer,
  filters: filtersReducer,
  photos: photosReducer,
})

export default rootReducer

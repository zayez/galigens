import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "../reducers/rootReducer"
import { saveState, loadState } from "./storage"
import throttle from "lodash/throttle"

const persistedState = loadState()

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(
  throttle(() => {
    // console.log(store.getState())
    saveState(store.getState())
  }, 1000)
)

export default store

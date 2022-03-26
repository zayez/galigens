import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import { saveState, loadState } from "./storage"
import throttle from "lodash/throttle"

const persistedState = loadState()

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(
  throttle(() => {
    logState(store.getState())
    saveState(store.getState())
  }, 1000)
)

const logState = (state) => {
  const { rovers } = state
  const { filters } = state
  const { photos } = state
  console.log(rovers)
  console.log(filters)
  console.log(photos)
}

export default store

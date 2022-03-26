import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import { saveState, loadState } from "./storage"
import throttle from "lodash/throttle"
import { composeWithDevTools } from "redux-devtools-extension"

const persistedState = loadState()

// raw store
// const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

// devtools store
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(
  throttle(() => {
    // logState(store.getState())
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

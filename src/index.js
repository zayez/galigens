import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"
import "./styles/base/normalize.sss"
import "./styles/base/variables.sss"
import "./styles/base/base.sss"
import "./styles/base/layout.sss"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)

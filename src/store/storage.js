// Credits to: https://newbedev.com/react-redux-state-is-lost-at-page-refresh
//
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) {
      return undefined
    }
    const state = JSON.parse(serializedState)
    return state
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (e) {}
}

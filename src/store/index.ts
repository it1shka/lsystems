import { createStore } from "redux"
import appReducer from "./reducer"

const store = createStore(appReducer)
export type RootDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof appReducer>
export default store
import { AppAction, AppActionType, AppState } from "./types";

const defaultAppState: AppState = {
  axiom: 'X',
  angle: '25.7',
  iterations: '7',
  rules: 'X -> F[+X][-X]FX; F -> FF',
  canvas: null,

  step: '3',
  color: '#000',
}

const appReducer = (
  state = defaultAppState,
  action: AppAction
): AppState => {
  switch(action.type) {
    case AppActionType.SET_AXIOM:
      return {
        ...state,
        axiom: action.payload
      }
    case AppActionType.SET_ANGLE:
      return {
        ...state,
        angle: action.payload
      }
    case AppActionType.SET_ITERS:
      return {
        ...state,
        iterations: action.payload
      }
    case AppActionType.SET_RULES:
      return {
        ...state,
        rules: action.payload
      }
    case AppActionType.SET_CANVAS:
      return {
        ...state,
        canvas: action.payload
      }
    case AppActionType.SET_STEP:
      return {
        ...state,
        step: action.payload
      }
    case AppActionType.SET_COLOR:
      return {
        ...state,
        color: action.payload
      }
    default:
      return state
  }
}

export default appReducer
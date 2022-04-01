export interface AppState {
  axiom: string
  angle: string
  iterations: string
  rules: string
  canvas: HTMLCanvasElement | null

  step: string
  color: string
}

export const enum AppActionType {
  SET_AXIOM = 'APP/SET_AXIOM',
  SET_ANGLE = 'APP/SET_ANGLE',
  SET_ITERS = 'APP/SET_ITERS',
  SET_RULES = 'APP/SET_RULES',
  SET_CANVAS = 'APP/SET_CANVAS',

  SET_STEP = 'APP/SET_STEP',
  SET_COLOR = 'APP/SET_COLOR'
}

export interface AppSetAxiomAction {
  type: AppActionType.SET_AXIOM
  payload: string
}

export interface AppSetAngleAction {
  type: AppActionType.SET_ANGLE
  payload: string
}

export interface AppSetItersAction {
  type: AppActionType.SET_ITERS
  payload: string
}

export interface AppSetRulesAction {
  type: AppActionType.SET_RULES
  payload: string
}

export interface AppSetCanvasAction {
  type: AppActionType.SET_CANVAS
  payload: HTMLCanvasElement | null
}

export interface AppSetStepAction {
  type: AppActionType.SET_STEP
  payload: string
}

export interface AppSetColorAction {
  type: AppActionType.SET_COLOR
  payload: string
}

export type AppAction = 
  | AppSetAxiomAction
  | AppSetAngleAction
  | AppSetItersAction
  | AppSetRulesAction
  | AppSetCanvasAction
  | AppSetStepAction
  | AppSetColorAction
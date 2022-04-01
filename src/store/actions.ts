import { AppActionType, AppSetAngleAction, AppSetAxiomAction, AppSetCanvasAction, AppSetColorAction, AppSetItersAction, AppSetRulesAction, AppSetStepAction } from "./types";

export function setAxiom(
  axiom: string
): AppSetAxiomAction {
  return {
    type: AppActionType.SET_AXIOM,
    payload: axiom
  }
}

export function setAngle(
  angle: string
): AppSetAngleAction {
  return {
    type: AppActionType.SET_ANGLE,
    payload: angle
  }
}

export function setIters(
  iters: string
): AppSetItersAction {
  return {
    type: AppActionType.SET_ITERS,
    payload: iters
  }
}

export function setRules(
  rules: string
): AppSetRulesAction {
  return {
    type: AppActionType.SET_RULES,
    payload: rules
  }
}

export function setCanvas(
  canvas: HTMLCanvasElement | null
): AppSetCanvasAction {
  return {
    type: AppActionType.SET_CANVAS,
    payload: canvas
  }
}

export function setStep(
  step: string
): AppSetStepAction {
  return {
    type: AppActionType.SET_STEP,
    payload: step
  }
}

export function setColor(
  color: string
): AppSetColorAction {
  return {
    type: AppActionType.SET_COLOR,
    payload: color
  }
}
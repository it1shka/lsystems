import type { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootDispatch, RootState } from '../store'
import { setAngle, setAxiom, setColor, setIters, setRules, setStep } from '../store/actions'
import StartButton from './Buttons'

const SidePanel = () => {
  const dispatch = useDispatch<RootDispatch>()
  const {
    axiom, angle, 
    iterations, rules,
    step, color
  } = useSelector((state: RootState) => {
    return state
  })

  const handleAxiomChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setAxiom(value))
  }

  const handleAngleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setAngle(value))
  }

  const handleIterationsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setIters(value))
  }

  const handleRulesChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setRules(value))
  }

  const handleStepChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setStep(value))
  }

  const handleColorChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setColor(value))
  }

  return (
    <SidePanelContainer>
      <div>
        <h3>Axiom:</h3>
        <Input
          value={axiom}
          onChange={handleAxiomChange}
        />
      </div> 
      <div>
        <h3>Angle:</h3>
        <Input 
          value={angle}
          onChange={handleAngleChange}
          type='number'
          min="0"
        />
      </div>
      <div>
        <h3>Iterations:</h3>
        <Input 
          value={iterations}
          onChange={handleIterationsChange}
          type='number'
          min="1"
        />
      </div>
      <div>
        <h3>Rules:</h3>
        <Input 
          value={rules}
          onChange={handleRulesChange}
        />
      </div> 
      <div>
        <h3>Step:</h3>
        <Input 
          value={step}
          onChange={handleStepChange}
          type='number'
          min="1"
        />
      </div> 
      <div>
        <h3>Color:</h3>
        <input 
          value={color}
          onChange={handleColorChange}
          type='color'
        />
      </div> 
      <StartButton />
    </SidePanelContainer>
  )
}

const Input = styled.input`
  border: none;
  outline: none;
  box-shadow: #ccc 0px 0px 3px;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  font-size: 0.9em;
  margin-top: 0.2em;
  width: 100%;
`

const SidePanelContainer = styled.div`
  width: 460px;
  background-color: white;
  box-shadow: #ddd 0px 0px 6px;

  display: flex;
  flex-direction: column;

  padding: 2em;
  & > div + div {
    margin-top: 0.5em;
  }
  color: grey;
`

export default SidePanel
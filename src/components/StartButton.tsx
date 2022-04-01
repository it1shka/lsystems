import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../store"
import { generateInstructions, parseRules } from "../turtle/rules"
import { createTurtle } from "../turtle/turtle"

const StartButton = () => {

  const {
    axiom, angle,
    iterations, rules,
    canvas, step, color
  } = useSelector((state: RootState) => {
    return state
  })

  const draw = () => {
    const parsedRules = parseRules(rules)
    const instructions = generateInstructions(
      axiom, parsedRules, Number(iterations))
    if(canvas === null) {
      return
    }
    const turtle = createTurtle(canvas)
    turtle(instructions, Number(angle), Number(step), color)
  }

  return (
    <StyledStartButton 
      disabled={!canvas}
      onClick={draw}
    >
      Draw
    </StyledStartButton>
  )
}

const StyledStartButton = styled.button`
  margin-top: auto;
  text-transform: uppercase;
  font-size: 1.1em;
  border: none;
  padding: 0.5em 0;
  background-color: grey;
  color: white;

  transition: 0.1s background-color 0s;
  &:hover {
    background-color: #3f3f3f;
  }
`

export default StartButton
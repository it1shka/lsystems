import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../store"
import { generateInstructions, parseRules } from "../turtle/rules"
import { createTurtle } from "../turtle/turtle"

const Buttons = () => {

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

  const save = () => {
    if(canvas === null) {
      return
    } 
    const img = canvas
      .toDataURL()
      .replace("image/png", "image/octet-stream")
    const link = document.createElement('a')
    link.href = img
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
  }

  return (
    <>
      <StyledButton 
        disabled={!canvas} 
        onClick={save}
        style={{marginTop: 'auto', marginBottom: '0.3em'}}
      >
        Save
      </StyledButton>
      <StyledButton 
        disabled={!canvas}
        onClick={draw}
      >
        Draw
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button`
  text-transform: uppercase;
  font-size: 1.1em;
  border: none;
  padding: 0.5em 0;
  background-color: #b3b3b3;
  color: white;

  transition: 0.1s background-color 0s;
  &:hover {
    background-color: grey;
  }
`

export default Buttons
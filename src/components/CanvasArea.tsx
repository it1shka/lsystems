import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { RootDispatch } from "../store"
import { setCanvas } from "../store/actions"

const CanvasArea = () => {
  const dispatch = useDispatch<RootDispatch>()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const target = canvasRef.current
    dispatch(setCanvas(target))
  }, [ canvasRef.current ])

  return (
    <CanvasAreaContainer>
      <StyledCanvas
        ref={canvasRef}
        width={700}
        height={700} 
      ></StyledCanvas>
    </CanvasAreaContainer>
  )
}

const CanvasAreaContainer = styled.div`
  display: grid;
  place-items: center;
`

const StyledCanvas = styled.canvas`
  background-color: white;
  box-shadow: #ddd 0px 0px 6px;
`

export default CanvasArea
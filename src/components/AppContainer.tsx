import type { FC } from 'react'
import styled from 'styled-components'

const AppContainer: FC = ({children}) => {
  return (
    <OuterContainer>
      <InnerContainer>
        { children }
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const InnerContainer = styled.div`
  max-width: 1340px;
  max-height: 860px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
`

export default AppContainer
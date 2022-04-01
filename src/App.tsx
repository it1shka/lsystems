import AppContainer from './components/AppContainer'
import CanvasArea from './components/CanvasArea'
import SidePanel from './components/SidePanel'

const App = () => {
  return (
    <AppContainer>
      <SidePanel />
      <CanvasArea />
    </AppContainer>
  )
}

export default App
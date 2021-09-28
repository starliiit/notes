import './App.css'

import "animate.css"
import 'antd/dist/antd.css'
import { CSSCenterFlex } from './components/notes'
import { Page } from './components'


export const Content: React.FC = ({ children }) => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      ...CSSCenterFlex(),
    }}>
      {children}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Content>
        <Page />
      </Content>
    </div>
  )
}

export default App

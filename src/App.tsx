import { CounterTwo, ButtonWithRef } from './Examples'

function App() {
  return (
    <div>
      <CounterTwo
        start={0}
      >
        Hello world
      </CounterTwo>

      <ButtonWithRef
        title={<i>Titre en italic</i>}
      >
        basic
      </ButtonWithRef>
    </div>
  )
}

export default App

import { Counter, CounterWithHook } from './Counter'
import { Counter as CounterTp } from './CustomHooksTP'

function App() {
  return (
    <main className="container py-5">
      <h1 className="mb-5">My first react/vite app</h1>
      <p>
        <Counter></Counter>
      </p>
      <p>
        <CounterWithHook></CounterWithHook>
      </p>
      <h2 className="fw-bold mt-5 mb-3">Custom hook TP</h2>
      <CounterTp />
    </main>
  )
}

export default App

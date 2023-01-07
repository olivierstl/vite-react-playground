import { Counter, CounterWithHook } from './Counter'

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
    </main>
  )
}

export default App

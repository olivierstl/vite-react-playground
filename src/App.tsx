import { Counter, CounterWithHook } from './Counter'
import { Counter as CounterTp, CommentsTable, TodoList } from './CustomHooksTP'

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
      <h3 className="mt-4">Methods with fetch</h3>
      <TodoList />
      <CommentsTable />
    </main>
  )
}

export default App

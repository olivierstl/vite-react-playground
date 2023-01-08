import { FunctionComponent, MouseEvent, useEffect, useState } from "react";
import type { FormEvent } from "react";

/** Custom hook. Set a start value and increment it */
function useIncrement(start: number = 0, step: number = 1): [number, () => void] {
  const [count, setCount] = useState(start)
  const increment = () => {
    setCount(count => count + step)
  }

  return [count, increment]
}

/** Custom hook. Toggle the counter visibility */
function useToggleCounter(isChecked: boolean = false): [boolean, () => void]  {
  const [value, setValue] = useState(isChecked)
  const toggle = () => {
    setValue(value => !value)
  }
  return [value, toggle]
}

/** Custom hook. Set a start value it auto increment it */
// function useAutoIncrement(start: number = 0, step: number = 1): number {
//   const [count, setCount] = useState(start)

//   /** Set timer on mount and clear on unmount */
//   useEffect(function() {
//     const timer = setInterval(() => setCount(c => c + step), 1000)
//     return () => clearInterval(timer)
//   }, [])

//   return count
// }

/** Same as above but custom hook call another custom hook */
function useAutoIncrement(start: number = 0, step: number = 1): number {
  const [count, increment] = useIncrement(start, step)

  /** Set timer on mount and clear on unmount */
  useEffect(function() {
    const timer = setInterval(increment, 1000)
    return () => clearInterval(timer)
  }, [])

  return count
}

export const Counter: FunctionComponent = () => {
  const [count, increment] = useIncrement(10, 2)
  const [isCounterVisible, toggleCounter] = useToggleCounter()
  const autoCount = useAutoIncrement(5, 7)

  return (
    <>
      <div className="form-check">
        <input
          id="toggle-counter"
          className="form-check-input"
          type="checkbox"
          name="toggle-counter"
          checked={isCounterVisible}
          onChange={toggleCounter}
        />
        <label
          className="form-check-label"
          htmlFor="toggle-counter"
        >
          Toggle counter visibility
        </label>
      </div>
      {isCounterVisible &&
        <button
        className="btn btn-info"
        onClick={increment}
        >
          counter {count}
        </button>
      }
      <p>
        Auto count: {autoCount}
      </p>
    </>
  )
}

type Todo = {
  userId: number,
  id: number,
  title: string,
  comlpleted: boolean
}

/** Fetch datas and generate a todo list ul li */
export function TodoList () {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)

  /** Use effects need a function, not a promise */
  useEffect(function() {
    /** Promise goes here */
    (async function() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      const responseData = await response.json()
      if(response.ok) {
        setTodos(responseData)
      } else {
        alert(JSON.stringify(responseData))
      }
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return (
      <p>Loading ...</p>
    )
  }

  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )
}

type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

/** fetch datas and generate a table with comments */
export const CommentsTable: FunctionComponent = () => {

  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  /** Use effects need a function, not a promise */
  useEffect(function() {
    /** Promise goes here */
    (async function() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
      const responseData = await response.json()
      if(response.ok) {
        setComments(responseData)
      } else {
        alert(JSON.stringify(responseData))
      }
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return (
      <p>Loading ...</p>
    )
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {comments.map(comment => (
          <tr key={comment.id}>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
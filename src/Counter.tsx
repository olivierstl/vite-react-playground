import React, { MouseEvent, useState } from "react"
import type { Dispatch } from "react"

export function Counter () {
  /**
   * create new state and setter
   * Cannot be in a condition or loop
   */
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  /** Update count and prevent default */
  const handleClickCount = function (e: MouseEvent) {
    e.preventDefault()
    setCount(count => count + 1)
  }

  /** Update count and prevent default */
  const handleClickCount2 = function (e: MouseEvent) {
    e.preventDefault()
    setCount2(count => count + 2)
  }

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={handleClickCount}>
        Count: {count}
      </button>
      <button
        className="btn btn-primary"
        onClick={handleClickCount2}>
        Count: {count2}
      </button>
    </>
  )
}

/** Custom hook */
function useIncrement(initial: number = 0, step: number = 1): [number, () => void] {
  const [count, setCount] = useState(initial)
  const increment = () => {
    setCount(c => c + step)
  }
  return [count, increment]
}

export function CounterWithHook () {
  /** Assign custom hook  */
  const [count, increment] = useIncrement(0, 10)

  return (
    <button
      className="btn btn-primary"
      onClick={increment}
    >
      Count: {count}
    </button>
  )
}
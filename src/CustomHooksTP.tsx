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
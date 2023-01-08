import { FunctionComponent, MouseEvent, useState } from "react";
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

export const Counter: FunctionComponent = () => {
  const [count, increment] = useIncrement(10, 2)
  const [isCounterVisible, toggleCounter] = useToggleCounter()

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
    </>
  )
}
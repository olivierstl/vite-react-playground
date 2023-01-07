import { forwardRef, FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, useRef, useState, ComponentType } from "react"

/** PropsWithChildren generic to handle children type */
type Props = PropsWithChildren<{
  start: number
}>

/** Classic function */
export function Counter ({start, children}: Props) {
  return (
    <div>
      <h2>Counter</h2>
      <p>
        Number: {start}
      </p>
      <p>{children}</p>
      <button>Increment</button>
    </div>
  )
}

/**
 * Const arrow function way
 * can be typed with FunctionComponent generic
 * More precise, check what is returned
 */
export const CounterTwo: FunctionComponent<Props> = ({start, children}) => {

  /** useState : type assertion */
  // const [n, setN] = useState(start)
  /** Can be specified. Set correct initial value */
  const [n, setN] = useState<number>(start)
  // const incr = () => setN(n + 1)

  /** Typing refs */
  const ref = useRef<HTMLButtonElement>(null)

  /**
   * Typing events
   * react use synthetics events, use the right one
   */
  function handleClick(e: MouseEvent) {
    setN(n + 1)
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Number: {n}
      </p>
      <p>{children}</p>
      <button ref={ref} onClick={handleClick}>Increment</button>
    </div>
  )
}

/** PropsWithChildren generic to handle children type */
type ButtonWithRefProps = PropsWithChildren<{
  /** Usefull type to pass wtring, value, element, etc to render */
  title?: ReactNode
}>

/** Typing with forwarded refs */
export const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonWithRefProps>(({children, title='bouton'}, ref) => {
  return (
    <div>
      <button ref={ref}>
        {title}
        {children}
      </button>
    </div>
  )
})

ButtonWithRef.displayName = 'ButtonWithRef'

type TitleProps = PropsWithChildren<{
  /** Valid JSX elements or React Component */
  titleTag?: keyof JSX.IntrinsicElements | ComponentType
}>

export const Title: FunctionComponent<TitleProps> = ({titleTag: Title = 'h1', children}) => {
  return (
    <Title>
      {children}
    </Title>
  )
}
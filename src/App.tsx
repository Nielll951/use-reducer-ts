import Counter from "./Counter"
import { CounterProvider } from "./context/CounterContex"
import { initState } from "./context/CounterContex"

function App() {

  return (
    <>
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </CounterProvider>
    </>
  )
}

export default App

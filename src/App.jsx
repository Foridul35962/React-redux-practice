import Display from "./component/display"
import Controls from "./component/controls"

const App = () => {
  return (
    <div className="h-dvh bg-gray-800 text-white w-dvw flex flex-col gap-3 items-center justify-center">
      <Display />
      <Controls />
    </div>
  )
}

export default App
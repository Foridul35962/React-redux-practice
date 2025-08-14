import { useRef } from "react";
import { useDispatch } from "react-redux"
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  }

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  }

  const handleAddition = () => {
    dispatch(counterAction.addition({number:inputElement.current.value}))
    inputElement.current.value = "";
  }

  const handleSubtraction = () => {
    dispatch(counterAction.substraction(inputElement.current.value))
    inputElement.current.value = "";
  }

  const handlePrivacy = ()=>{
    dispatch(privacyAction.isPrivacy())
  }

  return (
    <div className="[&>*]:flex [&>*]:gap-2 [&>*]:justify-center w-full flex flex-col text-center gap-5">
      <div>
        <button onClick={handleIncrement} className="text-xl rounded-2xl bg-blue-900 px-2 h-10 cursor-pointer text-white">+1</button>
        <button onClick={handleDecrement} className="text-xl rounded-2xl bg-amber-600 px-2 h-10 cursor-pointer text-white">-1</button>
        <button onClick={handlePrivacy} className="text-xl rounded-2xl bg-red-600 px-2 h-10 cursor-pointer text-white">Privacy</button>
      </div>
      <div>
        <input type="number" ref={inputElement} className="px-2 border-2 rounded-xl" placeholder="Enter value" />
        <button onClick={handleAddition} className="text-xl rounded-2xl bg-blue-900 px-2 h-10 cursor-pointer text-white">Addition</button>
        <button onClick={handleSubtraction} className="text-xl rounded-2xl bg-amber-600 px-2 h-10 cursor-pointer text-white">Subtraction</button>
      </div>
    </div>
  )
}

export default controls
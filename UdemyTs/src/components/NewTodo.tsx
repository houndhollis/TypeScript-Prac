import React, { useRef } from "react"

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e : React.FormEvent) => {
    e.preventDefault()
    const enteredText = todoTextInputRef.current!.value;
    // 물음표를 붙인 이유는 사용할려는 시점에서 값이 정해지지 않았기 떄문이다.
    // !. 을 사용한다면 100% 확신하여 null 이 아니라고 판단을 할때 사용한다.
    if(enteredText.trim().length === 0){
      return
    }
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type='text' id="text" ref={todoTextInputRef}/>
      <button>Add</button>
    </form>
  )
}

export default NewTodo
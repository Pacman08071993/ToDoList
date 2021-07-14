import {FC, useRef } from "react";

interface TodoFormProps {
  addTodo(title: string): void
}

export const ToDoForm: FC<TodoFormProps> = ({ addTodo }): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null)

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter'){
      addTodo(ref.current!.value)
      ref.current!.value = ''
    }
  }

  return (
    <div className='input-field mt2'>
      <input
        onKeyPress={onKeyPressHandler}
        ref={ref}
        type='text'
        id='title'
        placeholder='Input title action'
      />
      <label htmlFor="title" className='active'>Input title action</label>
    </div>
  )
}
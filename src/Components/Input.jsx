import React, { useState } from 'react'
import uuid from "react-uuid"

const Input = (props) => {
  const {todos, setTodos} = props;

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addBtn = () => {
    const newTodo = {
      id: uuid(),
      title: title,
      contents: contents,
      isDone: false,
    }
    setTodos([...todos, newTodo])
    console.log(todos)
    setTitle("")
    setContents("")
  }

  return (
    <>
      <input value={title} onChange={(e) => {
        setTitle(e.target.value)
      }} />
      <input value={contents} onChange={(e) => {
        setContents(e.target.value)
      }} />
      <button onClick={addBtn}>추가하기</button>
    </>
  )
}

export default Input
import React from 'react'

const Todolist = (props) => {
  const { todos, setTodos, doneLiist } = props;

  return (
    <>
      <h1 className='card_top'>{doneLiist ? "완료 목록" : "할 일 목록"}</h1>
      <div className="card_box">
      {todos.filter(item => {
        return item.isDone === doneLiist
      }).map(todo => {
        return (
            <div className="card" key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.contents}</p>
              <div className='card_btn_box'>
              <button onClick={() => {
                setTodos(todos.filter(item => {
                  return item.id !== todo.id
                }))
              }}>삭제하기</button>
              <button onClick={() => {
                setTodos(todos.map(item => {
                  if (item.id === todo.id) {
                    return { ...item, isDone: !item.isDone }
                  } else {
                    return item
                  }
                }))
              }}>{doneLiist ? "수정" : "완료"}</button>
              </div>
            </div>
        )
      })}
      </div>
    </>
  )
}

export default Todolist
import React from 'react'

const TodoForm = ({handleSubmit, todo, editId, setTodo}) => {
    return (
        <form className='inputForm' onSubmit={handleSubmit}>
            <input type='text'
            onChange={(e) => setTodo(e.target.value)}
            value={todo} />
            <button type='submit'>{editId ? "Edit" : "Go"}</button>
        </form>
    )
}

export default TodoForm

import React from 'react'

const Todos = ({handleDelete, handleEdit, todos}) => {
    return (
        <ul className='allTodos'>
            {todos.map((t) => (
                <li className='Todos' key={t.id}>
                    <span className='Text'>{t.todo}</span>
                    <button onClick={() => handleEdit(t.id)}>Edit</button>
                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default Todos;

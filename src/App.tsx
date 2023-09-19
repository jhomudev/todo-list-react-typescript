import { Plus, Trash } from '@phosphor-icons/react'
import ListTasksToDo from './components/ListTasksToDo'
import ListTasksDone from './components/ListTasksDone'
import useTasks from './hooks/useTasks'
import React, { useState } from 'react'

function App () {
  const { error, createTask, clearTasks } = useTasks()
  const [newTaskForm, setNewTaskForm] = useState<string>('')

  function handleChange (e:React.ChangeEvent<HTMLInputElement>) {
    const newValueError = e.target.value
    setNewTaskForm(newValueError)
  }

  function handleSubmitForm (e:React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    createTask(newTaskForm)
    setNewTaskForm('')
  }

  return (
    <div className='bg-gray-800 h-screen grid place-items-center text-slate-100'>
      <div className='container grid gap-3 w-[min(100%,25em)] bg-gray-900 p-7 rounded-md'>
        <h1 className='text-2xl text-center'>Lista de tareas</h1>
        <form className='flex' onSubmit={handleSubmitForm}>
          <input
            onChange={handleChange}
            className='w-full outline-none border-none indent-3 caret-blue-600 text-slate-800'
            type='text'
            placeholder='New task'
            value={newTaskForm}
          />
          <button className='bg-blue-600 p-3'>
            <Plus color='white' weight='bold' />
          </button>
        </form>
        {error && <p className='text-sm text-red-500 -mt-2 mb-2 italic'>{error}</p>}
        <main className='flex flex-col gap-4'>
          <ListTasksToDo />
          <ListTasksDone />
        </main>
        <button onClick={clearTasks} className='w-full p-3 flex items-center gap-3 justify-center bg-red-500 text-slate-300 rounded-md'><Trash /> Clear Tasks</button>
      </div>
    </div>
  )
}

export default App

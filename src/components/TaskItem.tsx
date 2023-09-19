import { Trash } from '@phosphor-icons/react'
import React, { useId } from 'react'
import useTasks from '../hooks/useTasks'

export type TaskItemType = {
  id:string
  descri: string,
  toDo: boolean,
}

export const TaskItem: React.FC<TaskItemType> = ({ id, descri, toDo }) => {
  const { deleteTask, changeStateTask } = useTasks()

  const taskId = useId()

  function handleDelete () {
    deleteTask(id)
  }

  return (
    <li className={`${toDo || 'brightness-50'} flex items-center gap-2 p-2 rounded-md shadow-lg shadow-slate-800 hover:bg-gray-800`}>
      <label htmlFor={taskId} className='p-2 rounded-full border-pink-600 border-[1px] cursor-pointer hover:bg-pink-600/30' />
      <input onChange={() => { changeStateTask(id) }} type='checkbox' id={taskId} className='hidden' />
      <p className={`${toDo || 'line-through'}`}>{descri}</p>
      <button onClick={handleDelete} className='ml-auto'><Trash /></button>
    </li>
  )
}

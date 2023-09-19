import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { TaskItem, TaskItemType } from './TaskItem'
import useTasks from '../hooks/useTasks'

const ListTasksDone = () => {
  const { tasks } = useTasks()
  const [show, setShow] = useState<boolean>(false)

  const tasksDone = tasks.filter((task:TaskItemType) => task.toDo === false)
  const hasTasks = tasksDone.length > 0

  function handleShow ():void {
    setShow(!show)
  }

  return (
    <div className='pl-2 pb-2 border-l-[1px] border-b-[1px] border-green-500'>
      <div onClick={handleShow} className='flex gap-3 items-center text-green-400'>
        <h2 className='text-lg'>Done</h2>
        <button><CaretDown size={20} className={`${show && 'rotate-180'} transition-all duration-500 cursor-pointer`} /></button>
        <span className='ml-auto p-[1px_5px_1px_5px] bg-green-200/40 rounded-full text-xs font-bold'>{tasksDone.length}</span>
      </div>
      <ul className={`${show ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-500`}>
        {
          hasTasks
            ? tasksDone.map((task:TaskItemType) => (
              <TaskItem
                key={task.id}
                id={task.id}
                descri={task.descri}
                toDo={task.toDo}
              />
            ))
            : <p>No hay tareas por hechas</p>
        }
      </ul>
    </div>
  )
}

export default ListTasksDone

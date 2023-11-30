import { useState } from "react"

const TodoInput = ({ addTodo }) => {

const [title, setTitle] = useState('')

const handleTodo = (e) => {
    if (e.key.toLowerCase() === 'enter') {
        addTodo(title)
        setTitle('')
    }
 }
console.log(title)
    return (
       <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input 
            type="text" 
            className="focus:shadow-lg font-lato focus:shadow-emerald-700 pl-12 w-full p-4 bg-gray-200 rounded-xl outline-none transition-all duration-300 ease-in-out text-black"
            placeholder="¿Qué tarea sigue...?"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => handleTodo(e)}
            ></input>
       </div> 
    )
}

export { TodoInput }
import { Title } from "./Components/Title"
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList/TodoList";
import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer"


function App() {

  const [todos, setTodos] = useState([

    {
      id: 1,
      title: "Mirar la próxima película de Marvel",
      completed: false,
    },
    {
      id: 2,
      title: "Leer Orgullo y prejuicio",
      completed: false,
    },
    {
      id: 3,
      title: "Hacer las compras para navidad",
      completed: false,
    },
    {
      id: 4,
      title: "Estudiar para Estadística",
      completed: false,
    }
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.lenght > 0 ? todos[todos.lenght - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedList);
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList);
  }

  const handleClearComplete = () => {
  const updatedList = todos.filter(todo => !todo.completed);
  setActiveFilter(updatedList);
}
  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => todo.completed === false);
        setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed === true);
        setFilteredTodos(completedTodos);
    }
    
  },[activeFilter, todos]);

  return (
    <div className="bg-emerald-500 min-h-screen h-full font-lato text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl ">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList 
         activeFilter={activeFilter}
         todos={filteredTodos}
         showAllTodos={showAllTodos}
         showActiveTodos={showActiveTodos}
         showCompletedTodos={showCompletedTodos}
         handleSetComplete={handleSetComplete}
         handleDelete={handleDelete}
         handleClearComplete={handleClearComplete} />
        
        <Footer />

      </div>
    </div>
  );
}

export default App;

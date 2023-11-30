import { Title } from "./Components/Title"
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList/TodoList";
import { useState } from "react";


function App() {

  const [todos, setTodos] = useState ([

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

  const addTodo = (title) => {
    const lastId = todos.lenght > 0 ? todos[todos.lenght -1].id :1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  return (
    <div className="bg-emerald-500 min-h-screen h-full font-lato text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl ">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;

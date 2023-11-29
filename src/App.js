import { Title } from "./Components/Title"
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList/TodoList";
import { Todo } from "./Components/Todo"
import { NavBar } from "./Components/NavBar";


function App() {
  return (
    <div className="bg-emerald-500 min-h-screen h-full font-lato text-gray-100 flex items-center justify-center py-20 px-5">
      <NavBar style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: 1 }} />
      <div className="container flex flex-col max-w-xl mx-auto mt-64">
        <Title />
        <TodoInput />
        <TodoList>
          <Todo />
        </TodoList>
      </div>
    </div>
  );
}

export default App;

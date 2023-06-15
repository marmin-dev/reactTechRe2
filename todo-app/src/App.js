import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, checked: true, text: "자바스크립트 공부하기" },
    { id: 2, checked: false, text: "기깔나는 밥먹기" },
    { id: 3, checked: false, text: "작살나게 누워있기" },
  ]);

  const nextId = useRef(4);

  const insertTodo = (text) => {
    const newTodos = todos.concat({ id: nextId.current, checked: false, text });
    setTodos(newTodos);
    nextId.current++;
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCheck = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newTodos);
  };

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={insertTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleCheck={toggleCheck}
      />
    </TodoTemplate>
  );
};

export default App;

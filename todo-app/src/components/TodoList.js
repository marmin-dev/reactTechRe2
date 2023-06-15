import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, removeTodo, toggleCheck }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCheck={toggleCheck}
        />
      ))}
    </div>
  );
};
export default TodoList;

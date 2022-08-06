import { Trash } from "phosphor-react";
import { Checkbox } from "../Checkbox";
import styles from "./Todo.module.css";

interface Todo {
  id: string;
  isDone: boolean;
  content: string;
}

interface TodoProps {
  todo: Todo;
  onTodoCheckboxClick: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export function Todo({ todo, onTodoCheckboxClick, onRemoveTodo }: TodoProps) {
  function handleCheckboxClick() {
    onTodoCheckboxClick(todo.id);
  }

  function handleRemoveTodo() {
    onRemoveTodo(todo.id);
  }

  return (
    <div className={styles.todo}>
      <div className={styles.todoContent}>
        <Checkbox checked={todo.isDone} onClick={handleCheckboxClick} />
        <span className={todo.isDone ? styles.todoTextDone : ""}>
          {todo.content}
        </span>
      </div>
      <Trash size={28} onClick={handleRemoveTodo} />
    </div>
  );
}

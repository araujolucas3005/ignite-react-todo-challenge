import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TodoForm.module.css";

interface TodoFormProps {
  onSubmitTodo: (todo: string) => void;
}

export function TodoForm({ onSubmitTodo }: TodoFormProps) {
  const [todoText, setTodoText] = useState("");

  function handleCreateTodoInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function submitTodo(e: FormEvent) {
    e.preventDefault();

    onSubmitTodo(todoText);

    setTodoText("");
  }

  const isTodoTextEmpty = !todoText;

  return (
    <form className={styles.todoForm} onSubmit={submitTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={todoText}
        onChange={handleCreateTodoInputChange}
      />
      <button type="submit" disabled={isTodoTextEmpty}>
        Criar <PlusCircle size={24} />
      </button>
    </form>
  );
}

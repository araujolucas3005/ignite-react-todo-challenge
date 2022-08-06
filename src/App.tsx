import { Header } from "./Components/Header";
import { TodoForm } from "./Components/TodoForm";
import "./global.css";

import styles from "./App.module.css";
import { TodosContent } from "./Components/TodosContent";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Todo } from "./Components/Todo";

import clipboardImg from "./assets/clipboard.svg";

interface Todo {
  id: string;
  isDone: boolean;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmitTodo(content: string) {
    const newTodo = {
      id: uuid(),
      content,
      isDone: false,
    };

    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  }

  function handleTodoCheckboxClick(id: string) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }

        return todo;
      });
    });
  }

  function handleRemoveTodo(id: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id != id);
    });
  }

  const doneTodosCount = todos.reduce((acc, todo) => {
    if (todo.isDone) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TodoForm onSubmitTodo={handleSubmitTodo} />
        <TodosContent
          totalTodosCount={todos.length}
          doneTodosCount={doneTodosCount}
        >
          {todos.length === 0 ? (
            <div className={styles.noTodos}>
              <div className={styles.separator} />
              <img src={clipboardImg} alt="clipboard" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : (
            todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onTodoCheckboxClick={handleTodoCheckboxClick}
                  onRemoveTodo={handleRemoveTodo}
                />
              );
            })
          )}
        </TodosContent>
      </div>
    </div>
  );
}

export default App;

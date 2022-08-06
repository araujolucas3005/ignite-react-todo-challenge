import { ReactElement, ReactNode } from "react";
import styles from "./TodosContent.module.css";

interface TodosContentProps {
  totalTodosCount: number;
  doneTodosCount: number;
  children: ReactNode;
}

export function TodosContent({
  children,
  totalTodosCount,
  doneTodosCount,
}: TodosContentProps) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.todosInfo}>
          <strong>Tarefas criadas</strong>
          <span>{totalTodosCount}</span>
        </div>
        <div className={styles.todosInfo}>
          <strong>Concluídas</strong>
          <span>
            {doneTodosCount} {totalTodosCount > 0 && `de ${totalTodosCount}`}
          </span>
        </div>
      </header>

      <main className={styles.todosList}>{children}</main>
    </div>
  );
}

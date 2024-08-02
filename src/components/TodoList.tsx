import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: { id: number; text: string; completed: boolean }[];
    deleteTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
    toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className={`flex flex-col ${todos.length > 5 ? 'overflow-y-scroll h-64' : ''}`}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    );
};

export default TodoList;

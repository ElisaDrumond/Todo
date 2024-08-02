import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Todo List</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-black">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                className="flex-1 p-2 border border-gray-300 rounded-l"
            />
            <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-700 transition duration-300"
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;

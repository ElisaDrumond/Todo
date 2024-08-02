import React, { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    deleteTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
    toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (newText.trim()) {
            editTodo(todo.id, newText);
            setIsEditModalOpen(false);
        }
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
        setIsModalOpen(false);
    };

    const handleToggleComplete = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleComplete(todo.id);
    };

    return (
        <div
            className="flex items-center justify-between p-2 border border-gray-300 rounded mb-2 bg-gray-100 cursor-pointer"
            onClick={handleToggleComplete}
        >
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
            </span>
            <button
                onClick={(e) => { e.stopPropagation(); setIsEditModalOpen(true); }}
                className="hidden md:block p-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-700 transition duration-300"
            >
                Edit
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="hidden md:block p-1 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
            >
                Delete
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); setIsEditModalOpen(true); }}
                className="md:hidden p-1 text-yellow-500 hover:text-yellow-700 transition duration-300"
            >
                <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="md:hidden p-1 text-red-500 hover:text-red-700 transition duration-300"
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                confirmButtonColor="red"
            >
                <h3 className="text-lg font-semibold mb-4">Confirm Action</h3>
                <p className="mb-4">Are you sure you want to delete this item?</p>
            </Modal>
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onConfirm={handleEdit}
                confirmButtonColor="green"
            >
                <h3 className="text-lg font-semibold mb-4">Edit Task</h3>
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </Modal>
        </div>
    );
};

export default TodoItem;

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode;
    confirmButtonColor: 'red' | 'green';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, children, confirmButtonColor }) => {
    if (!isOpen) return null;

    const confirmButtonClass = confirmButtonColor === 'red'
        ? 'bg-red-500 hover:bg-red-700'
        : 'bg-green-500 hover:bg-green-700';

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 transform transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-white rounded transition duration-300 ${confirmButtonClass}`}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {

   
    return (
        <>
            {isOpen && (
                <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 sm:max-w-lg w-full relative">
                        {children}
                        <button
                            className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
import React, { useEffect, useRef } from 'react';

const ReusableModal = ({ isOpen, closeModal, content }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-lightBg dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
        style={{ width: '80%', height: '80%' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{content.title}</h2>
          <button
            className="text-gray-600 dark:text-gray-300 text-lg font-bold hover:text-gray-900 dark:hover:text-white"
            onClick={closeModal}
          >
            ×
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{content.description}</p>
        <div className="space-y-4 overflow-y-auto h-full">
          {content.faq?.map((item, index) => (
            <details
              key={index}
              className="group border-b border-gray-300 dark:border-gray-700 pb-2"
            >
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 dark:text-white font-medium">
                {item.question}
                <span className="text-gray-600 dark:text-gray-300 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableModal;

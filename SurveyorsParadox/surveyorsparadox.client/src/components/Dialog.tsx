import React, { useState, useEffect, ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children : ReactNode
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [animate, setAnimate] = useState(isOpen);

  // Handle the opening/closing animation effect and body scroll lock
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimate(true), 10);

      // Disable background scrolling by adding class to body
      document.body.style.overflow = 'hidden';
    } else {
      setAnimate(false);
      setTimeout(() => setShowModal(false), 300); // match with the transition duration

      // Re-enable background scrolling when modal is closed
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      // Clean up the overflow style when the component unmounts
      document.body.style.overflow = '';
    };
  }, []);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg border w-11/12 sm:10/12 md:w-10/12 lg:8/12 xl:w-3/5 2xl:w-1/2 min-h-[70vh] max-h-[80vh] overflow-hidden transform transition-all duration-300 ${
          animate ? 'scale-100' : 'scale-90'
        }`}
      >
        {/* Modal Header */}
        <div className="flex font-guton font-bold justify-between items-center p-4 border-b border-black">
          <h2 className="text-5xl text-customBlue font-bold">REPORT</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="sm:p-4 overflow-y-auto max-h-[70vh] font-guton font-semibold">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full sm:px-3 fixed inset-0 z-50 flex items-center justify-center">
    
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      {/* change here  to adjust width and height of modal */}
      <div className="relative bg-white rounded-lg p-6 w-3/4 lg:max-w-5xl  mx-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
      
        {children}
      </div>
    </div>
  );
};

export default InfoModal; 
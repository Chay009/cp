// ProcessContext.tsx
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface ProcessContextType {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export const ProcessProvider = ({ children }: { children: ReactNode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <ProcessContext.Provider value={{
      file,
      setFile,
      loading,
      setLoading
    }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const useProcess = () => {
  const context = useContext(ProcessContext);
  if (!context) {
    throw new Error("useProcess must be used within a ProcessProvider");
  }
  return context;
};

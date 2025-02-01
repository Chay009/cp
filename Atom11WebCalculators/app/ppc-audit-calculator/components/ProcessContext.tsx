// ProcessContext.tsx
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { ResultsProps } from '../../types';

interface ProcessContextType {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  bulkFile: File | null;
  setBulkFile: Dispatch<SetStateAction<File | null>>;
  businessReportFile: File | null;
  setBusinessReportFile: Dispatch<SetStateAction<File | null>>;
  response: ResultsProps | null;
  setResponse: Dispatch<SetStateAction<ResultsProps | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export const ProcessProvider = ({ children }: { children: ReactNode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [bulkFile, setBulkFile] = useState<File | null>(null);
  const [businessReportFile, setBusinessReportFile] = useState<File | null>(null);
  const [response, setResponse] = useState<ResultsProps | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <ProcessContext.Provider value={{
      file,
      setFile,
      bulkFile,
      setBulkFile,
      businessReportFile,
      setBusinessReportFile,
      response,
      setResponse,
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

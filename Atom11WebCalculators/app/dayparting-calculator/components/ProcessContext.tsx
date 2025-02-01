// ProcessContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ResultsDayPartingProps, SummarizedData } from '../../types';

interface ProcessContextType {
  file: File | null;
  setFile: (file: File | null) => void;
  response: ResultsDayPartingProps | null;
  setResponse: (response: ResultsDayPartingProps | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  summarizedData: SummarizedData[] | null;
  setSummarizedData: (data: SummarizedData[] | null) => void;
  email: string;
  setEmail: (email: string) => void,
  emailSubmitted: boolean,
  setEmailSubmitted: (emailSubmitted: boolean) => void 
}

const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export const ProcessProvider = ({ children }: { children: ReactNode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<ResultsDayPartingProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [summarizedData, setSummarizedData] = useState<SummarizedData[] | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <ProcessContext.Provider
      value={{
        file,
        setFile,
        response,
        setResponse,
        loading,
        setLoading,
        summarizedData,
        setSummarizedData,
        email,
        setEmail,
        emailSubmitted,
        setEmailSubmitted
      }}
    >
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

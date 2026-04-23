import { createContext, useContext, useState, type ReactNode } from 'react';

// Definindo o formato dos dados do formulário
interface FormData {
  username: string;
  chartType: string;
  timespan: string;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    chartType: '',
    timespan: '',
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

// Hook personalizado para facilitar o uso nos componentes
export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext deve ser usado dentro de um FormProvider');
  }
  return context;
}
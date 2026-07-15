import { createContext, useContext, useState, type ReactNode } from "react";

interface AppState {
  user: "Umar Farooq" | null;
}

interface AppContextType {
  state: AppState;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: null,
  });

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

// 5. Create a Custom Hook for easy consumption
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

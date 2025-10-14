import { RoutineContextType, Routines } from "@/types/routinetype";
import React, { createContext, useState } from "react";
import { ReactNode } from "react";


export const RoutineContext = createContext<RoutineContextType>({
  routines: [],
  addRoutine: () => {},
});

export const RoutineProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [routines, setRoutines] = useState<Routines[]>([]);

  const addRoutine = ({
    name,
    schedule,
    description,
  }: Omit<Routines, "id" | "status" | "createdAt">) => {
    const newRoutine: Routines = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name,
      schedule,
      status: false,
      description,
    };
    setRoutines([...routines, newRoutine]);
  };
  
  const value = {
    routines,
    addRoutine,
  };

  return (
    <RoutineContext.Provider value={value}>
        {children}
    </RoutineContext.Provider>
  );
};

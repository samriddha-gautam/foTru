export type Frequency = "everyday" | "custom";

export interface Routines {
  id: string;
  name: string;
  status: boolean;
  schedule: RoutineSchedule;
  description?: string;
  createdAt : string;
}

export interface RoutineSchedule {
  frequency: Frequency
  time: Date;
  daysOfWeek?: number[];
  enabled: boolean;
}

export interface RoutineContextType {
  routines: Routines[];
  addRoutine: (routine: Omit<Routines, "id" | "status" | "createdAt">) => void;
}


import { RoutineContext } from "@/context/RoutineContext"
import { useContext } from "react"

export const useRoutines = ()=>{
    const context = useContext(RoutineContext);

    if(!context)
        throw new Error('useRoutines must be used within RoutineProvider')
    
    return context;
}
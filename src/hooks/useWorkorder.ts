import { useContext } from "react";
import { WorkorderContext } from "../contexts/WorkorderContext";

export function useWorkorder() {
  const context = useContext(WorkorderContext)
  return context
}
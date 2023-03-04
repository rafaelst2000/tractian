import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";

export function useUnit() {
  const context = useContext(UnitContext)
  return context
}
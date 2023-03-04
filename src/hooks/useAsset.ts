import { useContext } from "react";
import { AssetContext } from "../contexts/AssetContext";

export function useAsset() {
  const context = useContext(AssetContext)
  return context
}
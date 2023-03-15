import { useContext } from "react";
import { UIContext } from "./UIContext";

export { UIProvider } from "./UIProvider";
export const useUIContext = () => useContext(UIContext);
import React from "react";
import { FloorContextTypes } from "../types/context/FloorContext.types";

const FloorContext = React.createContext<FloorContextTypes | null>(null);

export default FloorContext;

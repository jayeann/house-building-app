import React from "react";
import { StepContextTypes } from "../types/context/StepContext.type";

const StepContext = React.createContext<StepContextTypes | null>(null);

export default StepContext;

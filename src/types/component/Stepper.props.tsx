type ClickHandler = (item: StepperObject) => (e: React.MouseEvent) => void;

export interface StepperObject {
  id: number;
  stepName: string;
  icon: any;
  module: any;
}

export interface StepperProps {
  data: StepperObject[];
  selectedStep: number;
  selectedItem: StepperObject;
  onClick: ClickHandler;
}

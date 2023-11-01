import { Dispatch, SetStateAction } from "react";

interface levelFloorObject {
  level: number;
  customFloor: rooms[];
}

interface rooms {
  floorNumber: number;
  rooms: roomObject[];
}

interface roomObject {
  id: string;
  room: number;
  size: number;
  windows: number;
  roomType: defaultObj;
  floorType: defaultObj;
  windowType: defaultObj;
  glassType: defaultObj;
}

interface defaultObj {
  id: number;
  value: string;
  name: string;
}

export interface FloorContextTypes {
  levelFloorsData: levelFloorObject;
  setLevelFloorsData: Dispatch<SetStateAction<any>>;
  handleAddRoom: (level: number) => void;
  handleRemoveRoom: () => void;
}

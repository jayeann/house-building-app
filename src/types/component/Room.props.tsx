export interface RoomItem {
  floorType?: string;
  glassType?: string;
  id?: string;
  room?: number;
  roomSize?: number;
  roomType?: string;
  windowType?: string;
  windowStyle?: string;
  windows?: string;
}

interface FloorLevel {
  id: number;
  floorLevel: number;
  e: any;
}

export interface RoomProps {
  id: "string";
  item: RoomItem;
  key?: number;
  floorLevel: number;
  handleChange: (roomId: string, floorLevel: number, e: any) => void;
}

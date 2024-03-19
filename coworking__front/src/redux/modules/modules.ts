export interface getRooms {
  id: number;
  address: string;
  name: string;
  description: string;
  price: number;
  places: number;
}

export interface postRooms {
  address: string;
  name: string;
  description: string;
  price: number;
  places: number;
}
export interface ServerResponse {
  incomplete_results: boolean;
  items: getRooms[];
}

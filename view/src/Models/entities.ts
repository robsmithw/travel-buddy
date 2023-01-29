export interface Entities {
  entity_id: string;
  name: string;
  type: "event-group" | "venue" | "";
  formatted_address: string;
}

export const INIT_ENTITY: Entities = {
  entity_id: "",
  name: "",
  type: "",
  formatted_address: "",
};

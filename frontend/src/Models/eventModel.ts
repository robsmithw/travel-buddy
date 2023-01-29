import { Entities, INIT_ENTITY } from "./entities";

export interface eventModel {
  id: string;
  title: string;
  description: string;
  category: string;
  entities: Entities;
  start: string;
  end: string;
  timezone: string;
  private: boolean;
  checkedValue?: boolean;
}

export const INIT_EVENT_MODEL_DATA: eventModel = {
  id: "",
  title: "...",
  description: "...",
  category: "...",
  entities: INIT_ENTITY,
  start: "...",
  end: "...",
  timezone: "...",
  private: false,
};

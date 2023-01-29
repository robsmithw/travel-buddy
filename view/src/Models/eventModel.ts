export interface eventModel{
    category: string;
    date: string; 
    time: string;
    name: string;
    checkedValue?: boolean
}

export const INIT_EVENT_MODEL_DATA: eventModel = {
    category: "",
    date: "",
    time: "",
    name: ""
}
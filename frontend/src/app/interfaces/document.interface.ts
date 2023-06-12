import { DocStatus } from "./types";

export interface Document {
  id: number;
  name: string;
  status: DocStatus;
  owner: number;
}

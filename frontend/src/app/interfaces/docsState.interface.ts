import { Document } from "./document.interface";

export interface DocsState {
  docs: Document[];
  current: Document | null;
}

import { createFeatureSelector } from "@ngrx/store";
import { DocsState } from "src/app/interfaces/docsState.interface";

const selectDocs = createFeatureSelector<DocsState>('docs');

export { selectDocs };

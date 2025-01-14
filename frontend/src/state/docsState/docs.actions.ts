import { createAction, props } from "@ngrx/store";
import { Document } from "src/app/interfaces/document.interface";

const addDoc = createAction(
  '[App] Add document',
  props<{doc: Document}>()
);

const setDocs = createAction(
  '[App] Set initial docs',
  props<{ docs: Document[] }>()
)

const setCurrent = createAction(
  '[App] Set current doc',
  props<{ doc: Document }>()
)

const deleteDoc = createAction(
  '[App] delete document',
  props<{ id: number }>()
)

export { addDoc, setDocs, setCurrent, deleteDoc };

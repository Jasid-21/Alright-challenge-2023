import { createReducer, on } from "@ngrx/store";
import { addDoc, setCurrent, setDocs } from "./docs.actions";
import { DocsState } from "src/app/interfaces/docsState.interface";

const initialState: DocsState = {
  docs: [],
  current: null
}

const docsReducer = createReducer(
  initialState,
  on(addDoc, (state, { doc }) => ({
    ...state,
    docs: [...state.docs, doc],
  })),

  on(setDocs, (state, { docs }) => ({
    ...state,
    docs
  })),

  on(setCurrent, (state, { doc }) => ({
    ...state,
    current: doc
  }))
);

export { initialState, docsReducer };

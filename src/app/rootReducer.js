import { combineReducers } from "redux";
import { subjectsReducer } from "../features/subjects/subjectsReducer ";
import { teachersReducer } from "../features/teachers/teachersReducer";

export const rootReducer = combineReducers({
  subjects: subjectsReducer,
  teachers: teachersReducer,
});

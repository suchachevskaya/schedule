const initialState = {
  subject: [],
  loading: false,
  error: null,
  saveLoading: false,
  saveResult: null,
  saveError: null,
};
export const subjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUBJECTS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUBJECTS_SUCCESS":
      return { ...state, loading: false, subject: action.payload };
    case "FETCH_SUBJECTS_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SAVE_SUBJECTS_START":
      return { ...state, saveLoading: true, saveError: null };
    case "SAVE_SUBJECTS_SUCCESS":
      return { ...state, saveLoading: false, saveResult: action.payload };
    case "SAVE_SUBJECTS_ERROR":
      return { ...state, saveLoading: false, saveError: action.payload };
    default:
      return state;
  }
};

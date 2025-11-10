const initialState = {
  teachers: [],
  loading: false,
  error: null,
};
export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TEACHERS_SUCCESS":
      return { ...state, loading: false, teachers: action.payload };

    default:
      return state;
  }
};

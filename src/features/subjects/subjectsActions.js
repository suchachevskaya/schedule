export const fetchSubjects = () => async (dispatch) => {
  dispatch({ type: "FETCH_SUBJECTS_START" });
  try {
    const response = await fetch("https://bgaa.by/test");
    const result = await response.json();
    dispatch({
      type: "FETCH_SUBJECTS_SUCCESS",
      payload: result.data,
    });
    dispatch({
      type: "FETCH_TEACHERS_SUCCESS",
      payload: result.teachers,
    });
  } catch (error) {
    dispatch({ type: "FETCH_SUBJECTS_ERROR", payload: error.message });
  }
};

export const saveSubjects = (data) => async (dispatch) => {
  dispatch({ type: "SAVE_SUBJECTS_START" });
  try {
    console.log(JSON.stringify(data, null, 2))
    const response = await fetch("https://bgaa.by/test_result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    dispatch({ type: "SAVE_SUBJECTS_SUCCESS", payload: result });
  } catch (error) {
    dispatch({ type: "SAVE_SUBJECTS_ERROR", payload: error.message });
  }
};

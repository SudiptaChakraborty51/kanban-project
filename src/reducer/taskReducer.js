export const initialTaskState = {
  tasks: [],
  search: "",
};

export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_TASKS":
      return { ...state, tasks: payload };
    case "UPDATE_TASKS":
      return { ...state, tasks: payload };
    case "SET_SEARCH":
      return { ...state, search: payload };
    default:
      return state;
  }
};

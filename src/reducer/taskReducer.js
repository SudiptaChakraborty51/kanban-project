export const initialTaskState = {
  tasks: [],
};

export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_TASKS":
      return { ...state, tasks: payload };
    default:
      return state;
  }
};

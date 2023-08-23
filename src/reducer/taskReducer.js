export const initialTaskState = {
  tasks: [],
  search: "",
  dateOption: "",
  assigneeOption: [],
  priorityOption: "",
};

export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_TASKS":
      return { ...state, tasks: payload };
    case "UPDATE_TASKS":
      return { ...state, tasks: payload };
    case "SET_SEARCH":
      return { ...state, search: payload };
    case "SET_DATE_OPTION":
      return { ...state, dateOption: payload };
    case "SET_ASSIGNEE_OPTION":
      return {
        ...state,
        assigneeOption: state.assigneeOption.includes(payload)
          ? state.assigneeOption.filter((assignee) => assignee !== payload)
          : [...state.assigneeOption, payload],
      };
    case "SET_PRIORITY_OPTION":
      return { ...state, priorityOption: payload };
    case "CLEAR_FILTERS":
      return { ...initialTaskState, tasks: payload };
    default:
      return state;
  }
};

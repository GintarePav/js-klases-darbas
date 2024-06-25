const ToDoReducer = (state, action) => {
  switch (action.type) {
    case "Add task":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "Remove task":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "Complete task":
      return {
        ...state,
        tasks: state.tasks.map((task) =>{
            if (task.id === action.payload) {
                if (task.complete === false) {
                    return { ...task, complete: true }
                } else {
                    return { ...task, complete: false }
                }
            } else {
                return { ...task, complete: false }
            }
        })
      };
    case "Open form":
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default ToDoReducer;

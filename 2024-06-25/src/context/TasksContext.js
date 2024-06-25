import { useContext, useReducer } from "react";
import React from "react";
import ToDoReducer from "../reducers/ToDoReducer";
import { opemForm, openForm, newTask, deleteTask, completeTask } from "../actions/ToDoActions";

const AppContext = React.createContext();

const initialState = {
  tasks: [
    {
      id: 1,
      title: "test task 1",
      description: "Test task 1 description",
      complete: false
    },
    {
      id: 2,
      title: "test task 2",
      description: "Test task 2 description",
      complete: false
    },
    {
      id: 3,
      title: "test task 3",
      description: "Test task 3 description",
      complete: false
    },
  ],
  isOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  const handleForm = (formStatus) => {
    dispatch(openForm(formStatus));
  };

  const addTask = (data) => {
    dispatch(newTask(data));
  };

  const deleteTaskById = (id) => {
    dispatch(deleteTask(id));
  }

  const markTaskAsDone = (id) => {
    dispatch(completeTask(id));
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleForm,
        addTask,
        deleteTaskById,
        markTaskAsDone
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

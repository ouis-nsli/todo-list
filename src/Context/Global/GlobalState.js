import React, { useReducer } from 'react';
import globalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import {
  OPEN_ADD_NEW_TODO_COMP,
  TOGGLE_NOTIFICATION_MESSAGE,
  OPEN_EDIT_TODO_COMP,
  TOGGLE_LOADER,
} from '../Types/Types';

const GlobalState = (props) => {
  const initialState = {
    IsAddNewTodoOpen: false,
    // Message state
    MessageType: '',
    messageContent: '',
    isMessageActive: false,
    // Edit State
    IsEditTodoOpen: false,
    IdEditedTodo: null,
    // Loader State
    isLoading: true,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  // handle toggle loader
  const toggleLoader = (e) => {
    setTimeout(() => {
      dispatch({
        type: TOGGLE_LOADER,
        payload: e,
      });
    }, 1500);
    console.log(state.isLoading);
  };

  // handle toggle add todo component
  const toggleAddTodoComp = (e) => {
    dispatch({
      type: OPEN_ADD_NEW_TODO_COMP,
      payload: e,
    });
  };

  // Toggle Edit handler
  const toggleEditTodoComp = (isOpen, id) => {
    dispatch({
      type: OPEN_EDIT_TODO_COMP,
      payload: {
        IsEditTodoOpen: isOpen,
        IdEditedTodo: id,
      },
    });
  };

  // Message handler
  const toggleMessage = (MgText, MgType, IsActive) => {
    dispatch({
      type: TOGGLE_NOTIFICATION_MESSAGE,
      payload: {
        MessageType: MgType,
        isMessageActive: IsActive,
        messageContent: MgText,
      },
    });
    setTimeout(() => {
      dispatch({
        type: TOGGLE_NOTIFICATION_MESSAGE,
        payload: {
          MessageType: '',
          isMessageActive: false,
          messageContent: '',
        },
      });
    }, 5000);
  };

  return (
    <GlobalContext.Provider
      value={{
        // Add new to state
        IsAddNewTodoOpen: state.IsAddNewTodoOpen,
        toggleAddTodoComp: toggleAddTodoComp,
        // Edit Todo State
        IsEditTodoOpen: state.IsEditTodoOpen,
        toggleEditTodoComp: toggleEditTodoComp,
        IdEditedTodo: state.IdEditedTodo,
        // Message state
        MessageType: state.MessageType,
        isMessageActive: state.isMessageActive,
        toggleMessage: toggleMessage,
        messageContent: state.messageContent,
        // Loader State
        isLoading: state.isLoading,
        toggleLoader: toggleLoader,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

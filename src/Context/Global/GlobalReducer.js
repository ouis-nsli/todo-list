import {
  OPEN_ADD_NEW_TODO_COMP,
  TOGGLE_NOTIFICATION_MESSAGE,
  OPEN_EDIT_TODO_COMP,
  TOGGLE_LOADER,
} from '../Types/Types';

export default (state, action) => {
  switch (action.type) {
    case OPEN_ADD_NEW_TODO_COMP:
      return {
        ...state,
        IsAddNewTodoOpen: action.payload,
      };
      break;
    case TOGGLE_NOTIFICATION_MESSAGE:
      return {
        ...state,
        MessageType: action.payload.MessageType,
        isMessageActive: action.payload.isMessageActive,
        messageContent: action.payload.messageContent,
      };
      break;
    case OPEN_EDIT_TODO_COMP:
      return {
        ...state,
        IsEditTodoOpen: action.payload.IsEditTodoOpen,
        IdEditedTodo: action.payload.IdEditedTodo,
      };
      break;
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
      break;

    default:
      break;
  }
};

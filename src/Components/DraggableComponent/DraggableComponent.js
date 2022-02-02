import React, { useContext, useEffect, useState } from 'react';
import PositionedMenu from '../Visual/PositionedMenu/PositionedMenu';
import './DraggableComponent.css';
import useDeleteTodo from '../../Hooks/useDeleteTodo';
import GlobalContext from '../../Context/Global/GlobalContext';
import EditTodo from '../Visual/EditTodo/EditTodo';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

const DraggableComponent = ({ snapshot, provided, el }) => {
  const deleteTodo = useDeleteTodo();
  const globalContext = useContext(GlobalContext);
  const { IsEditTodoOpen, toggleEditTodoComp, IdEditedTodo } = globalContext;
  const queryClient = useQueryClient();
  const previousTodo = queryClient.getQueriesData('Todos');
  const [editedTodo, setEditedTodo] = useState();

  useEffect(() => {
    setEditedTodo(
      previousTodo[0][1].data.filter((todo) => {
        return IdEditedTodo === todo._id;
      })
    );
  }, [IdEditedTodo]);

  useEffect(() => {}, [editedTodo]);

  return (
    <div>
      <div
        className={`todo-item ${snapshot.isDragging && 'dragging'}`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <PositionedMenu
          color="action"
          handleDelete={deleteTodo}
          id={el._id}
          IsEditTodoOpen={IsEditTodoOpen}
          toggleEditTodoComp={toggleEditTodoComp}
        />
        <Link to={`/${el._id}`}>{el.title}</Link>
      </div>
      {IsEditTodoOpen && editedTodo && (
        <EditTodo
          IsEditTodoOpen={IsEditTodoOpen}
          toggleEditTodoComp={toggleEditTodoComp}
          editedTod={editedTodo}
        />
      )}
    </div>
  );
};

export default DraggableComponent;

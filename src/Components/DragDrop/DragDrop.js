import React, { useContext, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import GlobalContext from '../../Context/Global/GlobalContext';
import useChangeStatus from '../../Helper/changeStatus';
import useTodos from '../../Hooks/useTodos';
import DroppableComponent from '../DroppableComponent/DroppableComponent';
import ColumnTitle from '../Visual/ColumnTitle/ColumnTitle';
import _ from 'lodash';
import Loader from '../Visual/Loader/Loader';

const DragDrop = () => {
  const { data, status, state } = useTodos();
  const changeStatus = useChangeStatus();
  const globalContext = useContext(GlobalContext);
  const { isLoading, toggleLoader } = globalContext;

  const handleDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    } else if (destination.droppableId !== source.droppableId)
      changeStatus.mutate({
        droppableId: destination.droppableId,
        draggableId: draggableId,
      });
  };

  useEffect(() => {
    if (status === 'success') toggleLoader(false);
  }, [status]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (category, key) => {
            return (
              <div
                key={key}
                className={`drppable-column-wraper ${category.name}`}
              >
                <ColumnTitle category={category} />
                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <>
                        <DroppableComponent
                          provided={provided}
                          category={category}
                          data={data}
                        />
                      </>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      )}
    </>
  );
};

export default DragDrop;

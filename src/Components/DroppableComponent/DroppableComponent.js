import React, { Fragment } from 'react';
import './DroppableComponent.css';
import { Draggable } from 'react-beautiful-dnd';
import DraggableComponent from '../DraggableComponent/DraggableComponent';

const DroppableComponent = ({ category, provided, data }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className="droppable-col-con"
    >
      {data &&
        data.data.map((el, index) => {
          // if (el.status === category.name)
          return (
            <Fragment key={el._id}>
              {el.status === category.name && (
                <Draggable key={el._id} index={index} draggableId={el._id}>
                  {(provided, snapshot) => {
                    return (
                      <DraggableComponent
                        snapshot={snapshot}
                        provided={provided}
                        el={el}
                      />
                    );
                  }}
                </Draggable>
              )}
            </Fragment>
          );
        })}
      {provided.placeholder}
    </div>
  );
};

export default DroppableComponent;

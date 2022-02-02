import React from 'react';

const TodoCard = ({ todo }) => {
  return (
    <>
      <div className="todo-card-info-wraper">
        <div className="todo-card-info-title">
          {todo && <p className="todo-card-info-title-head">Name</p>}
          <p className="todo-card-info-title-text">{todo && todo[0].title}</p>
        </div>
        <div className="todo-card-info-subject" style={{ marginTop: '40px' }}>
          <p className="todo-card-info-title-head">Subject</p>
          <p className="todo-card-info-title-text">{todo && todo[0].subject}</p>
        </div>
        <div className="todo-car-info-status">
          <div className="todo-car-info-status-text">
            {todo && <p className="todo-card-info-title-head">Status</p>}

            <div className="todo-card-info-title-text status">
              <div className="todo-car-info-status-circle"></div>
              {todo && todo && todo[0].status}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;

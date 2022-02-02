import React, { useState } from 'react';
import './AddNewTodo.css';
import BasicTextFields from '../../BasicTextFields/BasicTextFields';
import MultilineTextFields from '../../MultilineTextFields/MultilineTextFields';
import ContainedButtons from '../../ContainedButtons/ContainedButtons';
import usePostTodo from '../../../Hooks/usePostTodo';

const AddNewTodo = ({ toggleAddTodoComp }) => {
  const postTodo = usePostTodo();
  const [data, setData] = useState({
    title: '',
    subject: '',
  });
  return (
    <div className="add-todo-wraper">
      <div
        className="add-todo-bg-con"
        onClick={() => toggleAddTodoComp(false)}
      ></div>
      <div className="add-todo-form-con">
        <h3>Add a New Task</h3>
        <BasicTextFields data={data} setData={setData} value={data.title} />
        <MultilineTextFields data={data} setData={setData} />
        <div className="add-todo-form-btn">
          <ContainedButtons
            placeholder="ADD"
            bgColor="#5EB149"
            width="107px"
            APIaction={postTodo}
            UIaction={toggleAddTodoComp}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewTodo;

import React, { useLayoutEffect, useState } from 'react';
import BasicTextFields from '../../BasicTextFields/BasicTextFields';
import MultilineTextFields from '../../MultilineTextFields/MultilineTextFields';
import ContainedButtons from '../../ContainedButtons/ContainedButtons';
import useEditTodo from '../../../Hooks/useEditTodo';

const EditTodo = ({ toggleEditTodoComp, editedTod }) => {
  const EditTodo = useEditTodo();
  const [isData, setIsData] = useState(false);
  const [data, setData] = useState({
    title: '',
    subject: '',
  });
  useLayoutEffect(() => {
    if (editedTod[0]) {
      setData({
        title: editedTod[0].title,
        subject: editedTod[0].subject,
      });
    }
  }, [editedTod]);

  useLayoutEffect(() => {
    if (!isData && data.title && data.subject) {
      setIsData(true);
    }
  }, [data, isData]);

  return (
    <div className="add-todo-wraper">
      <div
        className="add-todo-bg-con"
        onClick={() => toggleEditTodoComp(false)}
      ></div>
      <div className="add-todo-form-con">
        <h3>Edit Task</h3>
        {isData && (
          <BasicTextFields data={data} setData={setData} value={data.title} />
        )}
        {isData && (
          <MultilineTextFields
            data={data}
            setData={setData}
            value={data.subject}
          />
        )}
        <div className="add-todo-form-btn">
          <ContainedButtons
            placeholder="EDIT"
            bgColor="#5EB149"
            width="107px"
            APIaction={EditTodo}
            UIaction={toggleEditTodoComp}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTodo;

import React, { useContext } from 'react';
import './Home.css';
import AddNewTodo from '../../Components/Visual/AddNewTodo/AddNewTodo';
import GlobalContext from '../../Context/Global/GlobalContext';
import Message from '../../Components/Message/Message';
import DragDrop from '../../Components/DragDrop/DragDrop';
import HelmetHead from '../../Components/HelmetHead/HelmetHead';

function Home() {
  const globalContext = useContext(GlobalContext);
  const {
    IsAddNewTodoOpen,
    toggleAddTodoComp,
    isMessageActive,
    messageContent,
    MessageType,
  } = globalContext;

  return (
    <>
      <HelmetHead
        title="Home Todo List"
        desc="List all task you want to do and categoris it"
      />
      <div className="home-page-wraper">
        <div className="home-page-todos-con">
          <DragDrop />
        </div>
      </div>
      {IsAddNewTodoOpen && <AddNewTodo toggleAddTodoComp={toggleAddTodoComp} />}
      {isMessageActive && (
        <Message messageType={MessageType} messageContent={messageContent} />
      )}
    </>
  );
}

export default Home;

import React, { useLayoutEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import './Todo.css';
import TodoCard from '../../Components/Visual/TodoPageComponents/TodoCard';
import ContainedButtons from '../../Components/ContainedButtons/ContainedButtons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import HelmetHead from '../../Components/HelmetHead/HelmetHead';

const Todo = ({ match }) => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState();
  const previousTodo = queryClient.getQueriesData('Todos');
  useLayoutEffect(() => {
    if (!previousTodo[0]) {
      history.push('/');
    } else {
      setTodo(
        previousTodo[0][1].data.filter((singleTodo) => {
          return singleTodo._id === match.params.slug;
        })
      );
    }
  }, []);

  return (
    <>
      <HelmetHead
        title="Todo Details"
        desc="See all your todo details and information"
      />
      <div className="todo-single-page-title">
        <div className="todo-card-info-wrp-con">
          <div>
            <h3>Task Details </h3>
            {todo && <TodoCard todo={todo} />}
            <div className="todo-card-info-btn-con">
              <Link to="/">
                <ContainedButtons
                  placeholder="BACK"
                  bgColor="#1695BD"
                  width="139px"
                  data={todo}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

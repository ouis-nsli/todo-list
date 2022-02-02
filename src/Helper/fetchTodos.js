import axios from 'axios';
import { APIkey } from './APIkey';

const fetchTodos = async () => {
  const res = await axios.get(
    `https://front-end-todo-test.herokuapp.com/todos?key=${APIkey}`
  );
  return res;
};
export default fetchTodos;

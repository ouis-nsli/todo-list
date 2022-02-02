import { useQuery } from 'react-query';
import fetchTodos from '../Helper/fetchTodos';

const useTodos = () => {
  const { data, status } = useQuery('Todos', fetchTodos, {
    refetchInterval: false,
  });
  const state = {
    todo: {
      name: 'todo',
      title: 'TO Do',
      subTitle: 'Things that need to be done.',
      color: '#F66568',
    },
    doing: {
      name: 'doing',
      title: 'Doing',
      subTitle: "What you're doing.",
      color: '#FFC773',
    },
    done: {
      name: 'done',
      title: 'Done',
      subTitle: 'Already done.',
      color: '#6BE795',
    },
    archive: {
      name: 'archive',
      title: 'Archive',
      subTitle: 'Not important but need to write down.',
      color: '#7389FF',
    },
  };
  return {
    data,
    status,
    state,
  };
};

export default useTodos;

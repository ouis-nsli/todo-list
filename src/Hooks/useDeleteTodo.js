import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { APIkey } from '../Helper/APIkey';

export default function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation(
    (value) => axios.delete(`todos/${value.idDeletedTodo}?key=${APIkey}`),
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries('Todos');
        const previousTodo = queryClient.getQueriesData('Todos');
        queryClient.setQueryData('Todos', (oldQueryData) => {
          const oldQueryDataCopy = oldQueryData.data.filter(
            (old) => old._id !== newTodo.idDeletedTodo
          );
          return {
            ...oldQueryData,
            data: [...oldQueryDataCopy],
          };
        });
        return {
          previousTodo,
        };
      },
      onError: (_error, _hero, context) => {
        queryClient.setQueryData('Todos', context.previousTodo);
      },
      onSettled: () => {
        queryClient.invalidateQueries('Todos');
      },
    }
  );
}

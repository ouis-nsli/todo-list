import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { APIkey } from '../Helper/APIkey';
import { v4 } from 'uuid';
// import GlobalContext from '../Context/Global/GlobalContext';

export default function usePostTodo() {
  const queryClient = useQueryClient();
  return useMutation(
    (value) =>
      axios.post(`/todos?key=${APIkey}`, {
        title: value.title,
        subject: value.subject,
      }),
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries('Todos');
        const previousTodo = queryClient.getQueriesData('Todos');
        queryClient.setQueryData('Todos', (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [
              ...oldQueryData.data,
              {
                _id: v4(),
                title: newTodo.title,
                subject: newTodo.subject,
                status: 'todo',
              },
            ],
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

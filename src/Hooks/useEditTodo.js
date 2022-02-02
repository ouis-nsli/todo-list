import axios from 'axios';
import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import GlobalContext from '../Context/Global/GlobalContext';
import { APIkey } from '../Helper/APIkey';

export default function useEditTodo() {
  const queryClient = useQueryClient();
  const globalContext = useContext(GlobalContext);
  const { IdEditedTodo } = globalContext;
  return useMutation(
    (value) =>
      axios.patch(`todos/${IdEditedTodo}?key=${APIkey}`, {
        title: value.title,
        subject: value.subject,
      }),
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries('Todos');
        const previousTodo = queryClient.getQueriesData('Todos');
        queryClient.setQueryData('Todos', (oldQueryData) => {
          const editedTodo = oldQueryData.data.filter(
            (old) => old._id === IdEditedTodo
          );
          const oldQueryDataCopy = oldQueryData.data.filter(
            (old) => old._id !== IdEditedTodo
          );
          return {
            ...oldQueryData,
            data: [
              ...oldQueryDataCopy,
              {
                _id: editedTodo[0]._id,
                title: newTodo.title,
                subject: newTodo.subject,
                status: editedTodo[0].status,
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

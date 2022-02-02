import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { APIkey } from '../Helper/APIkey';

export default function useChangeStatus() {
  const queryClient = useQueryClient();
  return useMutation(
    (value) =>
      axios.patch(`todos/${value.draggableId}?key=${APIkey}`, {
        status: value.droppableId,
      }),
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries('Todos');
        const previousTodo = queryClient.getQueriesData('Todos');
        queryClient.setQueryData('Todos', (oldQueryData) => {
          const dragedTodo = oldQueryData.data.filter(
            (old) => old._id === newTodo.draggableId
          );
          const oldQueryDataCopy = oldQueryData.data.filter(
            (old) => old._id !== newTodo.draggableId
          );
          return {
            ...oldQueryData,
            data: [
              ...oldQueryDataCopy,
              {
                _id: newTodo.draggableId,
                title: dragedTodo[0].title,
                status: newTodo.droppableId,
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

const serverAddress = 'http://localhost:8000/todo';

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}`);
  const todo = await response.json();

  return todo;
};

const remove = async (id) => {
  await fetch((`${serverAddress}/${id}`), {
    method: 'DELETE',
  });
  return true;
};

const TodoService = {
  fetchAll,
  remove,
};

export default TodoService;

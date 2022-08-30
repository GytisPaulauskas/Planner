const serverAddress = 'http://localhost:8000/todo';

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}`);
  const todo = await response.json();

  return todo;
};

const TodoService = {
  fetchAll,
};

export default TodoService;

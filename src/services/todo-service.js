const serverAddress = 'http://localhost:8000/todo';

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}`);
  const todo = await response.json();

  return todo;
};

const remove = async (id) => {
  await fetch((`http://localhost:8000/todo/${id}`), {
    method: 'DELETE',
  });

  return true;
};

const add = async (todoProps) => {
  const response = await fetch('http://localhost:8000/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoProps),
  });

  const todo = await response.json();

  return todo;
};

const TodoService = {
  fetchAll,
  remove,
  add,
};

export default TodoService;

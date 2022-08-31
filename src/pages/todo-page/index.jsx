import * as React from 'react';
import {
  Box, Paper, Input, IconButton, Button,
} from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import TodoService from 'services/todo-service';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const TodoPage = () => {
  const [todo, setTodo] = React.useState([]);
  const [newTitle, setNewTitle] = React.useState('');

  const fetchAllTodo = async () => {
    const fetchedTasks = await TodoService.fetchAll();
    setTodo(fetchedTasks);
  };

  const addItem = async (todoProps) => {
    await TodoService.add(todoProps);
    await fetchAllTodo();
  };

  const removeItem = async (id) => {
    await TodoService.remove(id);
    fetchAllTodo();
  };

  React.useEffect(() => {
    fetchAllTodo();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ title: newTitle, important: false });
  };

  return (
    <Box sx={{ m: 5 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center' }}>
          <RadioButtonUncheckedOutlinedIcon sx={{
            pl: 2, ml: 1, mr: 2, fontSize: 36, color: '#5e35b1',
          }}
          />
          <Input
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            disableUnderline
            placeholder="Įtraukti užduotį"
            sx={{
              width: '100%', py: 1, pr: 3,
            }}
          />
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: 'flex', alignItems: 'center', backgroundColor: '#f3f2f1', justifyContent: 'space-between', p: 1,
          }}
        >
          <IconButton><CalendarMonthIcon /></IconButton>
          <Button type="submit">Įtraukti</Button>
        </Paper>
      </Box>
      <Box>
        {todo.map(({
          id,
          title,
          important,
        }) => (
          <Paper
            key={id}
            elevation={0}
            sx={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1,
            }}
          >
            <Box sx={{
              display: 'flex', alignItems: 'center', my: 1,
            }}
            >
              <IconButton sx={{
                bgcolor: '#ffffff',
                color: 'white',
                ':hover': {
                  bgcolor: '#ffffff',
                  color: 'white',
                },
                ':active': {
                  bgcolor: '#ffffff',
                  color: 'white',
                },
              }}
              >
                <RadioButtonUncheckedOutlinedIcon
                  sx={{
                    pl: 2, mr: 1, fontSize: 36, color: '#5e35b1',
                  }}
                />
              </IconButton>
              <Box sx={{ color: '#323130' }}>{title}</Box>
            </Box>
            <Box>
              <IconButton>
                {important ? <StarIcon sx={{ color: '#5e35b1' }} /> : <StarBorderOutlinedIcon />}
              </IconButton>
              <IconButton>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => removeItem(id)}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>

    </Box>
  );
};

export default TodoPage;

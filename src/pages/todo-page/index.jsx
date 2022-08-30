import * as React from 'react';
import {
  Box, Paper, Input, IconButton,
} from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import TodoService from 'services/todo-service';

const TodoPage = () => {
  const [todo, setTodo] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedTasks = await TodoService.fetchAll();
      setTodo(fetchedTasks);
    })();
  }, []);

  return (
    <Box sx={{ m: 5 }}>
      <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center' }}>
        <RadioButtonUncheckedOutlinedIcon sx={{
          pl: 2, ml: 1, mr: 2, fontSize: 36, color: '#5e35b1',
        }}
        />
        <Input
          disableUnderline
          placeholder="Įtraukti užduotį"
          sx={{
            width: '100%', py: 1, pr: 3,
          }}
        />
      </Paper>
      <Box>
        {todo.map(({
          id,
          title,
        }) => (
          <Paper
            key={id}
            elevation={0}
            sx={{
              display: 'flex', alignItems: 'center', my: 1,
            }}
          >
            <IconButton sx={{
              ':hover': {
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
          </Paper>
        ))}
      </Box>

    </Box>
  );
};

export default TodoPage;

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from 'pages/todo-page';
import Navbar from 'components/navbar';
import KanbanPage from 'pages/kanban-page';
import CalendarPage from 'pages/calendar-page';
import DashboardPage from 'pages/dashboard-page';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/kanban" element={<KanbanPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

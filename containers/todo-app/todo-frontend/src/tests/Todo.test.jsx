/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

test('renders the component with the correct text', () => {
    const todo = {
        text: "Sample Todo",
        done: false,
    }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()
  render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />);
  
  expect(screen.getByText("Sample Todo")).toBeInTheDocument()
  expect(screen.getByText("This todo is not done")).toBeInTheDocument()
});
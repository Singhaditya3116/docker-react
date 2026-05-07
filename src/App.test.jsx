import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from './App'

test('renders app', () => {
  render(<App />)
  expect(screen.getByText(/get started/i)).toBeInTheDocument()
})

test('renders app 2', () => {
  render(<App />)
  expect(screen.getByText(/get started/i)).toBeInTheDocument();
}) 
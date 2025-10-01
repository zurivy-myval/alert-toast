import React from 'react';
import { Button } from '@/components/Button/Button';

export default function App() {
  return (
    <main className="app">
      <h1>React + Vite + SCSS (TS)</h1>
      <p>Edit <code>src/App.tsx</code> and save to test HMR.</p>
      <Button onClick={() => alert('It works!')}>Click me</Button>
    </main>
  );
}
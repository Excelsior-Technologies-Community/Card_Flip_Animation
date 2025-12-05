import { useState } from 'react'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>React Card Flip Animation</h1>
      <Card frontContent="Front Side" backContent="Back Side" />
      <Card frontContent="Hello" backContent="World" />
    </div>
  );
}

export default App;

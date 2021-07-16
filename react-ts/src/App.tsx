import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
<Todos items={['Learn React', 'Learn TypeScript']}/> 
{/* the error is because props is expected  */}
    </div>
  );
}

export default App;

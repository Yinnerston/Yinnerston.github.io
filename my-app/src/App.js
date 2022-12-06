import './App.css';

import Homepage from 'pages/Homepage';
import PageHeader from 'components/PageHeader';
import { useEffect } from 'react';


function App() {
  // Set title
  useEffect(() => {
      document.title = "Nathan Yin's Website"
    },[]
  )

  return (
    <div className="App">
      <header className="App-header">
        <PageHeader></PageHeader>
      </header>
      <Homepage></Homepage>
    </div>
  );
}

export default App;

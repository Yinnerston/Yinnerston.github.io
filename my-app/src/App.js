import './App.css';

import Homepage from 'pages/Homepage';
import PageHeader from 'components/PageHeader';

function App() {
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

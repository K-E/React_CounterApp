import './App.css';
import CounterButtons from './CounterButtons';

function App() {
  return (
    <div className="App" >
      <CounterButtons by={1}/>
      <CounterButtons by={3}/>
      <CounterButtons />
    </div>
  )
}


export default App;

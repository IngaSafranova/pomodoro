
import React,{useState} from 'react'
import Settings from './components/settings';
import Timer from './components/timer';

function App() {

  const [onBreak, setOnBreak]= useState(false)



  return (
    <main className="App">
    <h1> 25 + 5 Clock</h1>
    <Settings/>
    <Timer onBreak = {onBreak}/>

    </main>
  );
}

export default App;

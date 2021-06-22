import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/Game';

const App = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ])
  const [stepNumber, setStepNumber] = useState(0);

  return(
    <Game
      history={history}
      setHistory={setHistory}
      stepNumber={stepNumber}
      setStepNumber={setStepNumber}
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

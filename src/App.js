import './App.css'

import Player from './Player/Player'

function App() {
  return (
    <main>
      <Player name="Player1" score={111} current={0} isActive={true} />
      <Player name="Player2" score={24} current={0} isActive={false} />

      <img src="dice-5.png" alt="Playing dice" className="dice" />
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  )
}

export default App

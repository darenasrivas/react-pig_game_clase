import './App.css'

import { useState } from 'react'

import Player from './Player/Player'

// 1. definir variables de estado usando useState (activePlayer, score, current, diceNumber)
// 2. definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)
// 3. pasar las variables de estado y las funciones a los componentes Player y Dice
// 4. manejar los eventos de click en los botones de New game, Roll dice y Hold
// 5. manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
// 5. manejar el cambio de jugador activo cuando se hace click en el botón Hold
// 6. manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
// 7. manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
// 8. manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
// 9. manejar el cambio de jugador activo cuando se hace click en el botón New game

function App() {
  // Definir variables de estado
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScores] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  // Mandamos con el número, el número de la imagen del dado
  const [diceNumber, setDiceNumber] = useState(3)

  return (
    <main>
      <Player
        name="Player1"
        // Devuelve el primer valor del array [0,0]
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />
      <Player
        name="Player2"
        // Devuelve el segundo valor del array [0,0]
        score={score[1]}
        // Si se cumple && devuelve el ultimo valor, si no devuelve vacio. En este caso el que este activo devolvera current
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />

      {diceNumber && (
        // Si es falso no devuelve nada, cuando es todo verdadero, devuelve el texto de codigo
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}

      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  )
}

export default App

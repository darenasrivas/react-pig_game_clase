import './Player.css'

// Componente Jugador
// Recibe varias propiedades. Props = {name: 'Player 1', score: 43, current: 0, isActive:}
// Quitamos los IDs, ya que no hacen falta en react

function Player({ name, score, current, isActive }) {
  //const { name, score, current, isActive } = props

  const classPlayer = isActive
    ? score > 100
      ? 'player player--winner'
      : 'player player--active'
    : 'player'

  return (
    <section className={classPlayer}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current}</p>
      </div>
    </section>
  )
}

export default Player

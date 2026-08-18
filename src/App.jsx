import { useState } from 'react'
import './App.css'

function App() {
  const [pantalla, setPantalla] = useState('inicio')

  const [puntos, setPuntos] = useState(0)

  const [respuesta1, setRespuesta1] = useState('')
  const [mision1Completa, setMision1Completa] = useState(false)

  const [clasificacion, setClasificacion] = useState({})
  const [mensaje2, setMensaje2] = useState('')
  const [mision2Completa, setMision2Completa] = useState(false)
const [seleccionAbioticos, setSeleccionAbioticos] = useState([])
const [mensaje3, setMensaje3] = useState('')
const [mision3Completa, setMision3Completa] = useState(false)
const [cadenaSeleccionada, setCadenaSeleccionada] = useState([])
const [mensaje4, setMensaje4] = useState('')
const [mision4Completa, setMision4Completa] = useState(false)
const [respuesta5, setRespuesta5] = useState('')
const [mision5Completa, setMision5Completa] = useState(false)
const [respuesta6, setRespuesta6] = useState('')
const [mision6Completa, setMision6Completa] = useState(false)
const [respuesta7, setRespuesta7] = useState('')
const [mision7Completa, setMision7Completa] = useState(false)

const [pregunta8, setPregunta8] = useState(1)
const [aciertos8, setAciertos8] = useState(0)
const [mensaje8, setMensaje8] = useState('')
const [mision8Completa, setMision8Completa] = useState(false)
const [compromiso9, setCompromiso9] = useState('')
const [mision9Completa, setMision9Completa] = useState(false)

const [pregunta10, setPregunta10] = useState(1)
const [aciertos10, setAciertos10] = useState(0)
const [mision10Completa, setMision10Completa] = useState(false)
  const misiones = [
    { numero: 1, titulo: 'Exploradores del ecosistema', icono: '🌿' },
    { numero: 2, titulo: 'Detectives de seres vivos', icono: '🕵️' },
    { numero: 3, titulo: 'Guardianes del planeta', icono: '🌎' },
    { numero: 4, titulo: 'Construyendo cadenas de vida', icono: '🐛' },
    { numero: 5, titulo: 'Misión: salvar el ecosistema', icono: '🛡️' },
    { numero: 6, titulo: 'Clasificando hábitats', icono: '🏞️' },
    { numero: 7, titulo: 'El reto de los científicos', icono: '🔬' },
    { numero: 8, titulo: 'Quiz ecológico', icono: '❓' },
    { numero: 9, titulo: 'Mi compromiso con la naturaleza', icono: '💚' },
    { numero: 10, titulo: 'Gran desafío del ecosistema', icono: '🏆' },
  ]

  const seresVivos = [
    {
      id: 1,
      nombre: 'Mariposa',
      icono: '🦋',
      categoria: 'animal',
    },
    {
      id: 2,
      nombre: 'Árbol',
      icono: '🌳',
      categoria: 'planta',
    },
    {
      id: 3,
      nombre: 'Bacteria',
      icono: '🦠',
      categoria: 'microorganismo',
    },
    {
      id: 4,
      nombre: 'Conejo',
      icono: '🐇',
      categoria: 'animal',
    },
    {
      id: 5,
      nombre: 'Flor',
      icono: '🌸',
      categoria: 'planta',
    },
    {
      id: 6,
      nombre: 'Microbio',
      icono: '🧫',
      categoria: 'microorganismo',
    },
  ]
const elementosAbioticos = [
  { id: 1, nombre: 'Agua', icono: '💧', correcto: true },
  { id: 2, nombre: 'Luz solar', icono: '☀️', correcto: true },
  { id: 3, nombre: 'Suelo', icono: '🌱', correcto: true },
  { id: 4, nombre: 'Aire', icono: '🌬️', correcto: true },
  { id: 5, nombre: 'Conejo', icono: '🐇', correcto: false },
  { id: 6, nombre: 'Árbol', icono: '🌳', correcto: false },
]
const elementosCadena = [
  { id: 1, nombre: 'Sol', icono: '☀️' },
  { id: 2, nombre: 'Planta', icono: '🌱' },
  { id: 3, nombre: 'Oruga', icono: '🐛' },
  { id: 4, nombre: 'Ave', icono: '🐦' },
]
  const responderMision1 = (opcion) => {
    if (mision1Completa) return

    if (opcion === 'correcta') {
      setRespuesta1('correcta')
      new Audio('/aplausos.mp3').play()
      setPuntos((actual) => actual + 100)
      setMision1Completa(true)
    } else {
      setRespuesta1('incorrecta')
    }
  }

  const clasificarSer = (id, categoriaElegida) => {
    if (mision2Completa) return

    setClasificacion((actual) => ({
      ...actual,
      [id]: categoriaElegida,
    }))

    setMensaje2('')
  }

  const revisarMision2 = () => {
    if (mision2Completa) return

    const todosRespondidos = seresVivos.every(
      (ser) => clasificacion[ser.id]
    )

    if (!todosRespondidos) {
      setMensaje2('incompleta')
      return
    }

    const todasCorrectas = seresVivos.every(
      (ser) => clasificacion[ser.id] === ser.categoria
    )

    if (todasCorrectas) {
      setMensaje2('correcta')
      new Audio('/aplausos.mp3').play()
      setPuntos((actual) => actual + 150)
      setMision2Completa(true)
    } else {
      setMensaje2('incorrecta')
    }
  }

  const reiniciarClasificacion = () => {
    if (mision2Completa) return
    setClasificacion({})
    setMensaje2('')
  }

const seleccionarAbiotico = (id) => {
  if (mision3Completa) return

  setSeleccionAbioticos((actual) =>
    actual.includes(id)
      ? actual.filter((item) => item !== id)
      : [...actual, id]
  )

  setMensaje3('')
}

const revisarMision3 = () => {
  if (mision3Completa) return

  const correctos = elementosAbioticos
    .filter((elemento) => elemento.correcto)
    .map((elemento) => elemento.id)

  const seleccionCorrecta =
    seleccionAbioticos.length === correctos.length &&
    correctos.every((id) => seleccionAbioticos.includes(id))

  if (seleccionCorrecta) {
    setMensaje3('correcta')
    new Audio('/aplausos.mp3').play()
    setPuntos((actual) => actual + 150)
    setMision3Completa(true)
  } else {
    setMensaje3('incorrecta')
  }
}
const seleccionarCadena = (id) => {
  if (mision4Completa) return

  if (!cadenaSeleccionada.includes(id)) {
    setCadenaSeleccionada([...cadenaSeleccionada, id])
    setMensaje4('')
  }
}

const revisarMision4 = () => {
  if (mision4Completa) return

  const ordenCorrecto = [1, 2, 3, 4]

  const esCorrecta =
    cadenaSeleccionada.length === ordenCorrecto.length &&
    cadenaSeleccionada.every(
      (id, indice) => id === ordenCorrecto[indice]
    )

  if (esCorrecta) {
    setMensaje4('correcta')
    new Audio('/aplausos.mp3').play()
    setPuntos((actual) => actual + 200)
    setMision4Completa(true)
  } else {
    setMensaje4('incorrecta')
  }
}

const reiniciarCadena = () => {
  if (mision4Completa) return

  setCadenaSeleccionada([])
  setMensaje4('')
}
  if (pantalla === 'mision1') {
    return (
      <div className="mission-page">

        <nav className="mission-nav">
          <button
            className="back-button"
            onClick={() => setPantalla('inicio')}
          >
            ← Volver a las misiones
          </button>

          <div className="score">⭐ {puntos} puntos</div>
        </nav>

        <header className="mission-header">
          <div className="mission-big-icon">🌿</div>
          <p>MISIÓN 1</p>
          <h1>Exploradores del ecosistema</h1>
          <h2>¿Qué es un ecosistema?</h2>
        </header>

        <main className="mission-content">

          <section className="objective-box">
            <div className="objective-icon">🎯</div>

            <div>
              <h3>Tu objetivo</h3>
              <p>
                Reconocer qué es un ecosistema y descubrir los elementos
                que forman parte de él.
              </p>
            </div>
          </section>

          <section className="video-card">
            <span className="section-label">🎬 OBSERVA Y APRENDE</span>

            <h2>Descubre el mundo de los ecosistemas</h2>

            <p>
              Observa con atención este video. Después tendrás que superar
              un desafío para convertirte en un verdadero explorador.
            </p>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/SsRdLoYOMQA"
                title="Aprende sobre los Ecosistemas - Happy Learning"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-tip">
              👀 <strong>Presta atención:</strong> observa qué seres vivos y
              elementos de la naturaleza aparecen en el video.
            </div>
          </section>

          <section className="learning-card">
            <span className="section-label">🌎 DESCUBRE</span>

            <h2>¿Qué es un ecosistema?</h2>

            <p className="explanation">
              Un <strong>ecosistema</strong> es un lugar donde los seres vivos,
              como animales y plantas, se relacionan entre sí y con elementos
              de la naturaleza como el agua, el aire, el suelo y la luz del sol.
            </p>

            <div className="ecosystem-scene">
              <div>
                <span>☀️</span>
                <p>Luz solar</p>
              </div>

              <div>
                <span>🌳</span>
                <p>Plantas</p>
              </div>

              <div>
                <span>🐦</span>
                <p>Animales</p>
              </div>

              <div>
                <span>💧</span>
                <p>Agua</p>
              </div>

              <div>
                <span>🌱</span>
                <p>Suelo</p>
              </div>
            </div>

            <div className="remember-box">
              💡 <strong>Recuerda:</strong> todos estos elementos se necesitan
              y se relacionan para formar un ecosistema.
            </div>
          </section>

          <section className="challenge-card">
            <span className="section-label challenge-label">
              🎮 TU PRIMER RETO
            </span>

            <h2>¡Demuestra lo que aprendiste!</h2>

            <p className="question">
              ¿Cuál de estas opciones representa mejor un ecosistema?
            </p>

            <div className="answers">

              <button onClick={() => responderMision1('incorrecta')}>
                <span>🪑</span>
                <strong>Una silla</strong>
              </button>

              <button onClick={() => responderMision1('correcta')}>
                <span>🌳🐦💧☀️</span>
                <strong>
                  Un bosque con plantas, animales, agua y luz
                </strong>
              </button>

              <button onClick={() => responderMision1('incorrecta')}>
                <span>🚗</span>
                <strong>Un automóvil</strong>
              </button>

            </div>

            {respuesta1 === 'incorrecta' && (
              <div className="feedback incorrect">
                🤔 ¡Casi! Observa nuevamente los elementos del ecosistema
                e inténtalo otra vez.
              </div>
            )}

            {respuesta1 === 'correcta' && (
              <div className="feedback correct">
                <div className="reward-star">⭐</div>

                <h2>¡Excelente, explorador!</h2>

                <p>
                  Has identificado correctamente un ecosistema.
                </p>

                <strong>+100 puntos</strong>

                <div className="badge">
                  🏅 Insignia: Explorador de la Naturaleza
                </div>
              </div>
            )}

          </section>
        </main>
      </div>
    )
  }

  if (pantalla === 'mision2') {
    return (
      <div className="mission-page">

        <nav className="mission-nav">
          <button
            className="back-button"
            onClick={() => setPantalla('inicio')}
          >
            ← Volver a las misiones
          </button>

          <div className="score">⭐ {puntos} puntos</div>
        </nav>

        <header className="mission-header mission-header-2">
          <div className="mission-big-icon">🕵️</div>
          <p>MISIÓN 2</p>
          <h1>Detectives de seres vivos</h1>
          <h2>Componentes bióticos del ecosistema</h2>
        </header>

        <main className="mission-content">

          <section className="objective-box">
            <div className="objective-icon">🎯</div>

            <div>
              <h3>Tu objetivo</h3>
              <p>
                Identificar y clasificar los seres vivos de un ecosistema
                en animales, plantas y microorganismos.
              </p>
            </div>
          </section>

          <section className="learning-card">
            <span className="section-label">🔎 PISTA DEL DETECTIVE</span>

            <h2>¿Qué son los componentes bióticos?</h2>

            <p className="explanation">
              Los <strong>componentes bióticos</strong> son todos los seres
              vivos que encontramos en un ecosistema. Entre ellos están
              los animales, las plantas y los microorganismos.
            </p>

            <div className="biotic-groups">

              <div>
                <span>🐾</span>
                <h3>Animales</h3>
                <p>Se desplazan, se alimentan y responden al ambiente.</p>
              </div>

              <div>
                <span>🌱</span>
                <h3>Plantas</h3>
                <p>Crecen y producen su alimento mediante la luz solar.</p>
              </div>

              <div>
                <span>🦠</span>
                <h3>Microorganismos</h3>
                <p>
                  Son seres vivos muy pequeños que muchas veces no podemos
                  observar a simple vista.
                </p>
              </div>

            </div>
          </section>

          <section className="detective-card">

            <span className="section-label challenge-label">
              🕵️ CASO DEL DETECTIVE
            </span>

            <h2>Clasifica a cada ser vivo</h2>

            <p className="question">
              Observa cada tarjeta y selecciona la categoría correcta.
            </p>

            <div className="creatures-grid">

              {seresVivos.map((ser) => (
                <div className="creature-card" key={ser.id}>

                  <div className="creature-icon">
                    {ser.icono}
                  </div>

                  <h3>{ser.nombre}</h3>

                  <div className="category-buttons">

                    <button
                      className={
                        clasificacion[ser.id] === 'animal'
                          ? 'selected'
                          : ''
                      }
                      onClick={() =>
                        clasificarSer(ser.id, 'animal')
                      }
                    >
                      🐾 Animal
                    </button>

                    <button
                      className={
                        clasificacion[ser.id] === 'planta'
                          ? 'selected'
                          : ''
                      }
                      onClick={() =>
                        clasificarSer(ser.id, 'planta')
                      }
                    >
                      🌱 Planta
                    </button>

                    <button
                      className={
                        clasificacion[ser.id] === 'microorganismo'
                          ? 'selected'
                          : ''
                      }
                      onClick={() =>
                        clasificarSer(ser.id, 'microorganismo')
                      }
                    >
                      🦠 Microorganismo
                    </button>

                  </div>
                </div>
              ))}

            </div>

            <div className="detective-actions">

              <button
                className="reset-button"
                onClick={reiniciarClasificacion}
              >
                🔄 Reiniciar
              </button>

              <button
                className="check-button"
                onClick={revisarMision2}
              >
                🔍 Revisar respuestas
              </button>

            </div>

            {mensaje2 === 'incompleta' && (
              <div className="feedback incorrect">
                👀 Aún falta clasificar algunos seres vivos.
              </div>
            )}

            {mensaje2 === 'incorrecta' && (
              <div className="feedback incorrect">
                🤔 Hay algunas pistas que no coinciden. Revisa las tarjetas
                e inténtalo nuevamente.
              </div>
            )}

            {mensaje2 === 'correcta' && (
              <div className="feedback correct">

                <div className="reward-star">🕵️</div>

                <h2>¡Caso resuelto!</h2>

                <p>
                  Clasificaste correctamente todos los seres vivos.
                </p>

                <strong>+150 puntos</strong>

                <div className="badge">
                  🏅 Insignia: Detective de la Vida
                </div>

              </div>
            )}

          </section>

        </main>
      </div>
    )
  }
if (pantalla === 'mision3') {
  return (
    <div className="mission-page">

      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">⭐ {puntos} puntos</div>
      </nav>

      <header className="mission-header mission-header-3">
        <div className="mission-big-icon">🌎</div>
        <p>MISIÓN 3</p>
        <h1>Guardianes del planeta</h1>
        <h2>Componentes abióticos del ecosistema</h2>
      </header>

      <main className="mission-content">

        <section className="objective-box">
          <div className="objective-icon">🎯</div>

          <div>
            <h3>Tu objetivo</h3>
            <p>
              Reconocer los elementos no vivos necesarios para la vida
              dentro de un ecosistema.
            </p>
          </div>
        </section>

        <section className="learning-card">
          <span className="section-label">
            🌤️ DESCUBRE
          </span>

          <h2>Los elementos que hacen posible la vida</h2>

          <p className="explanation">
            Los <strong>componentes abióticos</strong> son elementos de
            la naturaleza que no tienen vida, pero son indispensables
            para los seres vivos.
          </p>

          <div className="abiotic-info">

            <div>
              <span>💧</span>
              <h3>Agua</h3>
              <p>
                Es necesaria para la vida de animales y plantas.
              </p>
            </div>

            <div>
              <span>☀️</span>
              <h3>Luz solar</h3>
              <p>
                Proporciona energía y ayuda a las plantas a crecer.
              </p>
            </div>

            <div>
              <span>🌱</span>
              <h3>Suelo</h3>
              <p>
                Contiene nutrientes y sostiene a las plantas.
              </p>
            </div>

            <div>
              <span>🌬️</span>
              <h3>Aire</h3>
              <p>
                Es indispensable para la respiración de los seres vivos.
              </p>
            </div>

          </div>
        </section>

        <section className="guardian-card">

          <span className="section-label challenge-label">
            🎮 DESAFÍO DEL GUARDIÁN
          </span>

          <h2>🌎 ¡Salva el ecosistema!</h2>

          <p className="question">
            Selecciona únicamente los componentes abióticos.
            ¡Cuidado! Algunos seres vivos se han escondido entre ellos.
          </p>

          <div className="abiotic-map">

            {elementosAbioticos.map((elemento) => (
              <button
                key={elemento.id}
                className={
                  seleccionAbioticos.includes(elemento.id)
                    ? 'abiotic-item selected'
                    : 'abiotic-item'
                }
                onClick={() => seleccionarAbiotico(elemento.id)}
              >
                <span>{elemento.icono}</span>
                <strong>{elemento.nombre}</strong>
              </button>
            ))}

          </div>

          <div className="remember-box">
            💡 <strong>Pista:</strong> busca los elementos de la
            naturaleza que no tienen vida.
          </div>

          <button
            className="check-button guardian-check"
            onClick={revisarMision3}
          >
            🌎 Comprobar misión
          </button>

          {mensaje3 === 'incorrecta' && (
            <div className="feedback incorrect">
              🤔 ¡Casi, guardián! Hay algún ser vivo seleccionado o
              falta un componente abiótico. Inténtalo nuevamente.
            </div>
          )}

          {mensaje3 === 'correcta' && (
            <div className="feedback correct">

              <div className="reward-star">🌎</div>

              <h2>¡Planeta protegido!</h2>

              <p>
                Has reconocido correctamente el agua, la luz solar,
                el suelo y el aire como componentes abióticos.
              </p>

              <strong>+150 puntos</strong>

              <div className="badge">
                🏅 Insignia: Guardián del Planeta
              </div>

            </div>
          )}

        </section>

      </main>
    </div>
  )
}
if (pantalla === 'mision4') {
  return (
    <div className="mission-page">

      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">⭐ {puntos} puntos</div>
      </nav>

      <header className="mission-header mission-header-4">
        <div className="mission-big-icon">🐛</div>
        <p>MISIÓN 4</p>
        <h1>Construyendo cadenas de vida</h1>
        <h2>Relaciones alimenticias entre los seres vivos</h2>
      </header>

      <main className="mission-content">

        <section className="objective-box">
          <div className="objective-icon">🎯</div>

          <div>
            <h3>Tu objetivo</h3>
            <p>
              Comprender cómo se relacionan los seres vivos mediante
              una cadena alimenticia.
            </p>
          </div>
        </section>

        <section className="learning-card">
          <span className="section-label">🍃 APRENDE</span>

          <h2>¿Qué es una cadena alimenticia?</h2>

          <p className="explanation">
            Una <strong>cadena alimenticia</strong> muestra cómo la energía
            pasa de un ser vivo a otro. Todo comienza con la energía del Sol,
            que permite crecer a las plantas.
          </p>

          <div className="food-chain-example">
            <div>
              <span>☀️</span>
              <strong>Sol</strong>
            </div>

            <span className="chain-arrow">→</span>

            <div>
              <span>🌱</span>
              <strong>Planta</strong>
            </div>

            <span className="chain-arrow">→</span>

            <div>
              <span>🐛</span>
              <strong>Oruga</strong>
            </div>

            <span className="chain-arrow">→</span>

            <div>
              <span>🐦</span>
              <strong>Ave</strong>
            </div>
          </div>

          <div className="remember-box">
            💡 <strong>Recuerda:</strong> cada elemento de la cadena
            depende del anterior para obtener energía.
          </div>
        </section>

        <section className="chain-game-card">

          <span className="section-label challenge-label">
            🎮 CONSTRUYE LA CADENA
          </span>

          <h2>Ordena la cadena alimenticia</h2>

          <p className="question">
            Pulsa los elementos en el orden correcto, desde donde comienza
            la energía hasta el último consumidor.
          </p>

          <div className="chain-options">
            {[...elementosCadena]
              .sort((a, b) => b.id - a.id)
              .map((elemento) => (
                <button
                  key={elemento.id}
                  className={
                    cadenaSeleccionada.includes(elemento.id)
                      ? 'chain-option selected'
                      : 'chain-option'
                  }
                  onClick={() => seleccionarCadena(elemento.id)}
                >
                  <span>{elemento.icono}</span>
                  <strong>{elemento.nombre}</strong>
                </button>
              ))}
          </div>

          <div className="selected-chain">
            <h3>Tu cadena:</h3>

            {cadenaSeleccionada.length === 0 ? (
              <p>Aún no has seleccionado ningún elemento.</p>
            ) : (
              <div className="selected-chain-row">
                {cadenaSeleccionada.map((id, indice) => {
                  const elemento = elementosCadena.find(
                    (item) => item.id === id
                  )

                  return (
                    <div key={id} className="selected-chain-item">
                      <span>{elemento.icono}</span>
                      <strong>{elemento.nombre}</strong>

                      {indice < cadenaSeleccionada.length - 1 && (
                        <span className="selected-arrow">→</span>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="chain-actions">
            <button
              className="reset-button"
              onClick={reiniciarCadena}
            >
              🔄 Reiniciar
            </button>

            <button
              className="check-button"
              onClick={revisarMision4}
            >
              ✅ Comprobar cadena
            </button>
          </div>

          {mensaje4 === 'incorrecta' && (
            <div className="feedback incorrect">
              🤔 El orden todavía no es correcto. Recuerda que todo comienza
              con el Sol.
            </div>
          )}

          {mensaje4 === 'correcta' && (
            <div className="feedback correct">

              <div className="reward-star">🌿</div>

              <h2>¡Cadena completada!</h2>

              <p>
                Has construido correctamente una cadena alimenticia.
              </p>

              <strong>+200 puntos</strong>

              <div className="badge">
                🏅 Insignia: Constructor de Cadenas de Vida
              </div>

            </div>
          )}

        </section>

      </main>
    </div>
  )
}

if (pantalla === 'mision5') {
  return (
    <div className="mission-page">
      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">⭐ {puntos} puntos</div>
      </nav>

      <main>
        <section className="mission-header">
          <div className="mission-number">MISIÓN 5</div>

          <h1>🌎 Misión: Salvar el ecosistema</h1>

          <p>
            ¡Guardianes! Nuestro ecosistema necesita ayuda.
            Deberán tomar buenas decisiones para proteger la naturaleza.
          </p>
        </section>

        <section className="mission-content">
          <h2>🌱 Tu misión</h2>

          <p>
            Observa las situaciones que encontrarás y elige la acción
            que ayude a cuidar nuestro planeta.
          </p>

          <div className="challenge-card">
            <div className="challenge-icon">🐟🌊</div>

            <h3>¡Hay basura cerca del río!</h3>

            <p>
              ¿Qué debería hacer un Guardián del Ecosistema?
            </p>

            <div className="options">
              <button>
              <button
  onClick={() => {
    setRespuesta5('correcta')

    if (!mision5Completa) {
      new Audio('/aplausos.mp3').play()
      setPuntos(puntos + 100)
      setMision5Completa(true)
    }
  }}
>
  🗑️ Recoger la basura y colocarla en su lugar
</button>
              </button>

              <button>
<button
  onClick={() => setRespuesta5('incorrecta')}
>
  🌊 Lanzar la basura al río
</button>
              </button>

              <button>
              <button
  onClick={() => setRespuesta5('incorrecta')}
>
  🚶 Dejar la basura allí
</button>
              </button>
            </div>
{respuesta5 === 'incorrecta' && (
  <div className="feedback incorrect">
    <div className="reward-star">💡</div>

    <h2>¡Inténtalo nuevamente!</h2>

    <p>
      Esa acción puede perjudicar al ecosistema.
      Piensa en una opción que ayude a mantener limpio el río
      y proteger a los seres vivos.
    </p>

    <strong>🌱 ¡Tú puedes, Guardián!</strong>
  </div>
)}
            {respuesta5 === 'correcta' && (
  <div className="feedback correct">
    <div className="reward-star">🌟</div>

    <h2>¡Excelente decisión!</h2>

    <p>
      Has ayudado a proteger el río y a los seres vivos
      que habitan en este ecosistema.
    </p>

    <strong>+100 puntos</strong>

    <div className="badge">
      🏅 Insignia: Protector del Ecosistema
    </div>
  </div>
)}
          </div>
        </section>
      </main>
    </div>
  )
}
if (pantalla === 'mision6') {
  return (
    <div className="mission-page">
      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">⭐ {puntos} puntos</div>
      </nav>

      <main>
        <section className="mission-header">
          <div className="mission-number">MISIÓN 6</div>

          <h1>🌳🌊 Clasificando hábitats</h1>

          <p>
            Cada ser vivo necesita un lugar adecuado para vivir.
            Observa los animales y descubre cuál es su hábitat.
          </p>
        </section>

        <section className="mission-content">
          <h2>🔎 Tu reto</h2>

          <p>
            Observa el animal y selecciona el hábitat donde vive.
          </p>

          <div className="challenge-card">
            <div className="challenge-icon">🐟</div>

            <h3>¿Dónde vive el pez?</h3>

            <div className="options">
              <button
  onClick={() => setRespuesta6('incorrecta')}
>
  🌳 Bosque
</button>
              <button
  onClick={() => {
    setRespuesta6('correcta')

    if (!mision6Completa) {
      new Audio('/aplausos.mp3').play()
      setPuntos((puntosAnteriores) => puntosAnteriores + 100)
      setMision6Completa(true)
    }
  }}
>
  🌊 Agua
</button>
              <button
  onClick={() => setRespuesta6('incorrecta')}
>
  🏜️ Desierto
</button>
            </div>
          </div>
          {respuesta6 === 'incorrecta' && (
  <div className="feedback incorrect">
    <div className="reward-star">💡</div>

    <h2>¡Inténtalo nuevamente!</h2>

    <p>
      El pez necesita agua para vivir.
      Piensa cuál de estos lugares le permite nadar,
      alimentarse y mantenerse con vida.
    </p>

    <strong>🐟 ¡Tú puedes encontrar su hábitat!</strong>
  </div>
)}
          {respuesta6 === 'correcta' && (
  <div className="feedback correct">
    <div className="reward-star">🌟</div>

    <h2>¡Muy bien!</h2>

    <p>
      El pez vive en el agua. Los animales necesitan un hábitat
      adecuado para alimentarse, protegerse y sobrevivir.
    </p>

    <strong>+100 puntos</strong>

    <div className="badge">
      🏅 Insignia: Experto en Hábitats
    </div>
  </div>
)}
        </section>
      </main>
    </div>
  )
}

if (pantalla === 'mision7') {
  return (
    <div className="mission-page">

     <nav className="mission-nav">
  <button
    className="back-button"
    onClick={() => setPantalla('inicio')}
  >
    ← Volver a las misiones
  </button>

  <div className="score">
    ⭐ {puntos} puntos
  </div>
</nav> 
        
          
        

     
        
        
      

      <main className="mission-content">

        <section className="mission-section">

          <h2>🔬 El reto de los científicos</h2>

          <p>
            Observa la situación y piensa como un verdadero científico.
          </p>

          <div className="challenge-card">

            <div className="challenge-icon">🌱☀️💧</div>

            <h3>
              Una planta necesita crecer fuerte y saludable.
            </h3>

            <p>
              ¿Qué necesita principalmente para vivir?
            </p>

            <div className="options">

              <button
                onClick={() => {
                  setRespuesta7('incorrecta')
                }}
              >
                🍬 Dulces y juguetes
              </button>

              <button
                onClick={() => {
                  setRespuesta7('correcta')

                  if (!mision7Completa) {
                    new Audio('/aplausos.mp3').play()
                    setPuntos(puntos + 100)
                    setMision7Completa(true)
                  }
                }}
              >
                ☀️ Luz, agua y aire
              </button>

              <button
                onClick={() => {
                  setRespuesta7('incorrecta')
                }}
              >
                📺 Televisión y videojuegos
              </button>

            </div>

            {respuesta7 === 'correcta' && (
              <div className="feedback correct">
                <div className="reward-star">🌟</div>

                <h2>¡Excelente, científico!</h2>

                <p>
                  Las plantas necesitan agua, luz y aire para vivir y crecer.
                </p>

                <strong>+100 puntos</strong>

                <div className="badge">
                  🏅 Insignia: Pequeño Científico
                </div>
              </div>
            )}

            {respuesta7 === 'incorrecta' && (
              <div className="feedback incorrect">
                <div className="reward-star">💡</div>

                <h2>¡Piensa como un científico!</h2>

                <p>
                  Observa nuevamente. ¿Qué elementos de la naturaleza ayudan
                  a una planta a mantenerse viva y crecer?
                </p>

                <strong>🌱 ¡Inténtalo nuevamente!</strong>
              </div>
            )}

          </div>

        </section>

      </main>

    </div>
  )
}

if (pantalla === 'mision8') {
  const responderQuiz8 = (esCorrecta) => {
    if (mensaje8 !== '') return

    if (esCorrecta) {
      setAciertos8((anteriores) => anteriores + 1)
      setPuntos((anteriores) => anteriores + 50)
      setMensaje8('correcta')
    } else {
      setMensaje8('incorrecta')
    }
  }

  const siguientePregunta8 = () => {
    setMensaje8('')

    if (pregunta8 < 3) {
      setPregunta8((anterior) => anterior + 1)
    } else {
      new Audio('/aplausos.mp3').play()
      setMision8Completa(true)
    }
  }

  return (
    <div className="mission-page">

      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">
          ⭐ {puntos} puntos
        </div>
      </nav>

      <main>
        <section className="mission-content">

          <h2>❓ Quiz ecológico</h2>

          <p>
            Demuestra todo lo que has aprendido sobre los ecosistemas.
          </p>

          {!mision8Completa && (
            <div className="challenge-card">

              <div className="challenge-icon">
                🌎 Pregunta {pregunta8} de 3
              </div>

              {pregunta8 === 1 && (
                <>
                  <h3>
                    ¿Cuál de estos elementos es un ser vivo?
                  </h3>

                  <div className="options">
                    <button onClick={() => responderQuiz8(true)}>
                      🌳 Árbol
                    </button>

                    <button onClick={() => responderQuiz8(false)}>
                      🪨 Roca
                    </button>

                    <button onClick={() => responderQuiz8(false)}>
                      💧 Agua
                    </button>
                  </div>
                </>
              )}

              {pregunta8 === 2 && (
                <>
                  <h3>
                    ¿Qué debemos hacer para cuidar un río?
                  </h3>

                  <div className="options">
                    <button onClick={() => responderQuiz8(false)}>
                      🗑️ Lanzar basura
                    </button>

                    <button onClick={() => responderQuiz8(true)}>
                      ♻️ Mantenerlo limpio
                    </button>

                    <button onClick={() => responderQuiz8(false)}>
                      🧴 Verter líquidos contaminantes
                    </button>
                  </div>
                </>
              )}

              {pregunta8 === 3 && (
                <>
                  <h3>
                    ¿Dónde vive principalmente un pez?
                  </h3>

                  <div className="options">
                    <button onClick={() => responderQuiz8(false)}>
                      🏜️ Desierto
                    </button>

                    <button onClick={() => responderQuiz8(false)}>
                      🌳 Bosque
                    </button>

                    <button onClick={() => responderQuiz8(true)}>
                      🌊 Agua
                    </button>
                  </div>
                </>
              )}

              {mensaje8 === 'correcta' && (
                <div className="feedback correct">
                  <div className="reward-star">🌟</div>

                  <h2>¡Respuesta correcta!</h2>

                  <p>
                    ¡Muy bien, Guardián! Continúa con el desafío.
                  </p>

                  <strong>+50 puntos</strong>

                  <br />

                  <button onClick={siguientePregunta8}>
                    {pregunta8 < 3
                      ? '➡️ Siguiente pregunta'
                      : '🏁 Finalizar quiz'}
                  </button>
                </div>
              )}

              {mensaje8 === 'incorrecta' && (
                <div className="feedback incorrect">
                  <div className="reward-star">💡</div>

                  <h2>¡Observa nuevamente!</h2>

                  <p>
                    Piensa en lo que aprendiste durante las misiones anteriores.
                  </p>

                  <button onClick={() => setMensaje8('')}>
                    🔄 Intentar otra vez
                  </button>
                </div>
              )}

            </div>
          )}

          {mision8Completa && (
            <div className="feedback correct">

              <div className="reward-star">🏆</div>

              <h2>¡Quiz completado!</h2>

              <p>
                Obtuviste {aciertos8} respuestas correctas de 3.
              </p>

              <strong>
                🌎 ¡Has demostrado tus conocimientos ecológicos!
              </strong>

              <div className="badge">
                🏅 Insignia: Experto Ecológico
              </div>

            </div>
          )}

        </section>
      </main>

    </div>
  )
}

if (pantalla === 'mision9') {

  const elegirCompromiso9 = (compromiso) => {
    setCompromiso9(compromiso)

    if (!mision9Completa) {
      new Audio('/aplausos.mp3').play()
      setPuntos((anteriores) => anteriores + 100)
      setMision9Completa(true)
    }
  }

  return (
    <div className="mission-page">

      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">
          ⭐ {puntos} puntos
        </div>
      </nav>

      <main className="mission-content">

        <section className="mission-section">

          <h2>💚 Mi compromiso con la naturaleza</h2>

          <p>
            Un verdadero Guardián del Ecosistema ayuda a proteger
            la naturaleza todos los días.
          </p>

          {!mision9Completa && (
            <div className="challenge-card">

              <div className="challenge-icon">🌎🌱</div>

              <h3>Elige tu compromiso con el planeta</h3>

              <p>
                ¿Cuál de estas acciones te comprometes a realizar?
              </p>

              <div className="options">

                <button
                  onClick={() =>
                    elegirCompromiso9(
                      'Cuidaré el agua y cerraré la llave cuando no la necesite.'
                    )
                  }
                >
                  💧 Cuidar el agua
                </button>

                <button
                  onClick={() =>
                    elegirCompromiso9(
                      'Colocaré la basura en su lugar y ayudaré a mantener limpio mi entorno.'
                    )
                  }
                >
                  ♻️ Colocar la basura en su lugar
                </button>

                <button
                  onClick={() =>
                    elegirCompromiso9(
                      'Cuidaré las plantas y los animales de mi comunidad.'
                    )
                  }
                >
                  🌱 Cuidar plantas y animales
                </button>

              </div>

            </div>
          )}

          {mision9Completa && (
            <div className="feedback correct">

              <div className="reward-star">🌟</div>

              <h2>¡Compromiso aceptado!</h2>

              <p>
                Has elegido una acción muy importante para proteger
                nuestro planeta.
              </p>

              <div className="challenge-card">

                <h3>💚 Mi promesa como Guardián</h3>

                <p>
                  “{compromiso9}”
                </p>

              </div>

              <strong>+100 puntos</strong>

              <div className="badge">
                🏅 Insignia: Guardián de la Naturaleza
              </div>

              <p>
                🌎 Cada pequeña acción ayuda a cuidar nuestro hogar.
              </p>

            </div>
          )}

        </section>

      </main>

    </div>
  )
}

if (pantalla === 'mision10') {

  const responder10 = (esCorrecta) => {
    if (esCorrecta) {
      setAciertos10((anteriores) => anteriores + 1)
    }

    if (pregunta10 < 3) {
      setPregunta10((anterior) => anterior + 1)
    } else {
      if (!mision10Completa) {
        new Audio('/aplausos.mp3').play()
        setPuntos((anteriores) => anteriores + 200)
        setMision10Completa(true)
      }
    }
  }

  return (
    <div className="mission-page">

      <nav className="mission-nav">
        <button
          className="back-button"
          onClick={() => setPantalla('inicio')}
        >
          ← Volver a las misiones
        </button>

        <div className="score">
          ⭐ {puntos} puntos
        </div>
      </nav>

      <main className="mission-content">

        <section className="mission-section">

          <h2>🏆 Gran desafío del ecosistema</h2>

          <p>
            ¡Has llegado a la misión final!
            Demuestra todo lo que aprendiste como Guardián del Ecosistema.
          </p>

          {!mision10Completa && (
            <div className="challenge-card">

              <div className="challenge-icon">
                🌎 Desafío {pregunta10} de 3
              </div>

              {pregunta10 === 1 && (
                <>
                  <h3>
                    ¿Qué elementos forman parte de un ecosistema?
                  </h3>

                  <div className="options">
                    <button onClick={() => responder10(true)}>
                      🌱 Seres vivos y elementos no vivos
                    </button>

                    <button onClick={() => responder10(false)}>
                      🎮 Solo juguetes
                    </button>

                    <button onClick={() => responder10(false)}>
                      🏠 Solo edificios
                    </button>
                  </div>
                </>
              )}

              {pregunta10 === 2 && (
                <>
                  <h3>
                    ¿Cuál es una acción correcta para proteger la naturaleza?
                  </h3>

                  <div className="options">
                    <button onClick={() => responder10(false)}>
                      🗑️ Tirar basura al suelo
                    </button>

                    <button onClick={() => responder10(true)}>
                      ♻️ Mantener limpio el entorno
                    </button>

                    <button onClick={() => responder10(false)}>
                      🌳 Dañar las plantas
                    </button>
                  </div>
                </>
              )}

              {pregunta10 === 3 && (
                <>
                  <h3>
                    ¿Por qué debemos cuidar los ecosistemas?
                  </h3>

                  <div className="options">
                    <button onClick={() => responder10(true)}>
                      🌎 Porque son el hogar de muchos seres vivos
                    </button>

                    <button onClick={() => responder10(false)}>
                      🚫 Porque no sirven para nada
                    </button>

                    <button onClick={() => responder10(false)}>
                      🧱 Porque solo tienen piedras
                    </button>
                  </div>
                </>
              )}

            </div>
          )}

          {mision10Completa && (
            <div className="feedback correct">

              <div className="reward-star">🏆</div>

              <h2>¡Gran desafío completado!</h2>

              <p>
                Lograste {aciertos10} respuestas correctas de 3.
              </p>

              <strong>+200 puntos</strong>

              <div className="badge">
                🏅 Insignia: Guardián Maestro del Ecosistema
              </div>

              <p>
                🌿 Has completado todas las misiones y demostrado
                que sabes observar, comprender y proteger los ecosistemas.
              </p>

              <h3>🎉 ¡Felicitaciones, Guardián!</h3>

            </div>
          )}

        </section>

      </main>

    </div>
  )
}

const insignias =
  (mision1Completa ? 1 : 0) +
  (mision2Completa ? 1 : 0) +
  (mision3Completa ? 1 : 0) +
  (mision4Completa ? 1 : 0) +
  (mision5Completa ? 1 : 0) +
  (mision6Completa ? 1 : 0) +
  (mision7Completa ? 1 : 0) +
  (mision8Completa ? 1 : 0) +
  (mision9Completa ? 1 : 0) +
  (mision10Completa ? 1 : 0)
return (
    <div className="app">

      <header className="hero">
        <div className="hero-content">

          <div className="planet">🌎</div>

          <p className="mini-title">
            Aventura educativa de Ciencias Naturales
          </p>

          <h1>
            Guardianes de los
            <span> Ecosistemas</span>
          </h1>

          <p className="subtitle">
            ¡Aprende, juega y conviértete en un guardián de la naturaleza!
          </p>

          <div className="student-panel">

           <div>
  <span className="label">Tu misión</span>
  <strong>
    {insignias === 10
      ? "🏆 ¡10 misiones completadas!"
      : "Completar 10 desafíos"}
  </strong>
</div> 
             
              
            

            <div>
              <span className="label">Tus puntos</span>
              <strong>⭐ {puntos}</strong>
            </div>

            <div>
              <span className="label">Insignias</span>
              <strong>🏅 {insignias}</strong>
            </div>

          </div>
        </div>
      </header>

      <main className="content">
{insignias === 10 && (
  <section className="celebracion-final">
    <div className="celebracion-icono">🏆</div>

    <h2>¡Felicidades, Guardián de los Ecosistemas!</h2>

    <p>
      Has completado las 10 misiones y demostrado todo lo que aprendiste
      sobre los ecosistemas.
    </p>

    <div className="celebracion-datos">
      <span>⭐ {puntos} puntos</span>
      <span>🏅 {insignias} insignias</span>
    </div>

    <p className="celebracion-mensaje">
      🌿 ¡Tu compromiso ayuda a proteger la naturaleza y nuestro planeta!
    </p>
  </section>
)}
        <section className="intro">
          <span className="tag">🌱 Ruta de aprendizaje</span>

          <h2>Elige una misión</h2>

          <p>
            Supera cada desafío, gana puntos e insignias y demuestra
            cuánto sabes sobre los ecosistemas.
          </p>
        </section>

        <section className="missions-grid">

          {misiones.map((mision) => (
            <article className="mission-card" key={mision.numero}>

              <div className="mission-number">
                {mision.numero}
              </div>

              <div className="mission-icon">
                {mision.icono}
              </div>

              <p>Misión {mision.numero}</p>

              <h3>{mision.titulo}</h3>

              {mision.numero === 1 && (
                <button onClick={() => setPantalla('mision1')}>
                  {mision1Completa
                    ? '✓ Misión completada'
                    : 'Comenzar misión'}
                </button>
              )}

              {mision.numero === 2 && (
                <button onClick={() => setPantalla('mision2')}>
                  {mision2Completa
                    ? '✓ Misión completada'
                    : 'Comenzar misión'}
                </button>
              )}
{mision.numero === 3 && (
  <button onClick={() => setPantalla('mision3')}>
    {mision3Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}
{mision.numero === 4 && (
  <button onClick={() => setPantalla('mision4')}>
    {mision4Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}
{mision.numero === 5 && (
  <button onClick={() => setPantalla('mision5')}>
  {mision5Completa
  ? '✓ Misión completada'
  : 'Comenzar misión'}
  </button>
)}

{mision.numero === 6 && (
  <button onClick={() => setPantalla('mision6')}>
    {mision.numero === 6 && (
  <button onClick={() => setPantalla('mision6')}>
    {mision6Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}
  </button>
)}

{mision.numero === 7 && (
  <button onClick={() => setPantalla('mision7')}>
    {mision7Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}
  
    
  


{mision.numero === 8 && (
  <button onClick={() => setPantalla('mision8')}>
    {mision8Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}
  
   
  


{mision.numero === 9 && (
  <button onClick={() => setPantalla('mision9')}>
    {mision9Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}  
    
  


{mision.numero === 10 && (
  <button onClick={() => setPantalla('mision10')}>
    {mision10Completa
      ? '✓ Misión completada'
      : 'Comenzar misión'}
  </button>
)}
 
    
  

  

  

  

  

  



            </article>
          ))}

        </section>
      </main>

      <footer>
        <p>
          🌿 Guardianes de los Ecosistemas · Ciencias Naturales · Segundo EGB
        </p>
      </footer>

    </div>
  )
}

export default App
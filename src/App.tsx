import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio')

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'mallas', label: 'Mallas' },
    { id: 'fonemas', label: 'Fonemas' },
    { id: 'rendering', label: 'Rendering' },
    { id: 'demo', label: 'Demo' },
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="nav-title">Mallas Paramétricas</h1>
          <div className="nav-links">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeSection === 'inicio' && (
          <section className="section hero">
            <div className="hero-content">
              <h2 className="hero-title">Animación 3D con Texto</h2>
              <p className="hero-subtitle">
                Implementación de mallas paramétricas para generación de animaciones
              </p>
              <div className="objectives">
                <h3>Objetivos</h3>
                <div className="objective-grid">
                  <div className="objective-card">
                    <div className="objective-icon">🎭</div>
                    <p>Convertir texto en animación de personajes 3D que hablan</p>
                  </div>
                  <div className="objective-card">
                    <div className="objective-icon">🔗</div>
                    <p>Integrar tecnologías gráficas y procesamiento de lenguaje natural</p>
                  </div>
                  <div className="objective-card">
                    <div className="objective-icon">🤖</div>
                    <p>Simular conversaciones usando inteligencia artificial</p>
                  </div>
                </div>
              </div>
              <div className="justification">
                <h3>Justificación</h3>
                <ul>
                  <li>La animación manual de personajes 3D es un proceso largo y costoso</li>
                  <li>Automatizar la sincronización labial permite producción más eficiente</li>
                  <li>Abre nuevas posibilidades en educación, entretenimiento y más</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'mallas' && (
          <section className="section">
            <h2>¿Qué son las Mallas?</h2>
            <div className="definition-box">
              <p>
                Una <strong>malla</strong> es una estructura compuesta por vértices, aristas y caras 
                que define la forma de un objeto en el espacio 3D.
              </p>
              <p>
                Se utilizan en gráficos por computadora para representar y animar personajes, 
                objetos y escenas. En este proyecto, trabajamos con mallas de un personaje 
                para animar movimientos faciales sincronizados con el habla.
              </p>
            </div>
            
            <div className="image-grid">
              <div className="image-card">
                <img src="entorno_blender.png" alt="Entorno Blender" />
                <p className="image-caption">Entorno de trabajo en Blender</p>
              </div>
              <div className="image-card">
                <img src="division_malla.png" alt="División de malla" />
                <p className="image-caption">División de la malla en componentes</p>
              </div>
              <div className="image-card">
                <img src="creacion_shapekeys.png" alt="Creación de Shape Keys" />
                <p className="image-caption">Creación de Shape Keys para animación</p>
              </div>
              <div className="image-card">
                <img src="malla_en_fondo.png" alt="Malla en fondo" />
                <p className="image-caption">Renderizado con fondo realista</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'fonemas' && (
          <section className="section">
            <h2>Fonemas y Sincronización Labial</h2>
            
            <div className="process-flow">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>¿Qué son los Fonemas?</h3>
                <p>
                  Los fonemas representan los sonidos que la lengua maneja, independientemente 
                  de las variantes al hablar. Se utilizan para mapear el movimiento de la boca.
                </p>
                <p>
                  El objetivo de la sincronía de labios es replicar estos movimientos para 
                  adaptarse a una pista de audio y generar la ilusión del habla.
                </p>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Extracción de Fonemas</h3>
                <p>
                  Transformamos texto en una lista de fonemas utilizando una librería de 
                  procesamiento de lenguaje natural.
                </p>
                <p>
                  Cada palabra se descompone en sus fonemas constituyentes, que luego 
                  utilizamos para animar la malla 3D.
                </p>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Fonema → Animación</h3>
                <p>
                  Mapeamos los fonemas a las animaciones de la boca correspondientes.
                </p>
                <p>
                  Cada fonema se asocia con un Shape Key específico que representa 
                  la posición de la boca para ese sonido.
                </p>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Generación de Audio</h3>
                <p>
                  Generamos audio para acompañar la animación creada.
                </p>
                <p>
                  Utilizamos una API de text-to-speech con voces dinámicas y realistas 
                  para dar vida al personaje.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'rendering' && (
          <section className="section">
            <h2>Rendering y Creación de Video</h2>
            
            <div className="rendering-info">
              <div className="info-card">
                <h3>¿Qué es el Rendering?</h3>
                <p>
                  La renderización es el proceso de generar una imagen o secuencia de imágenes 
                  a partir de un modelo 3D mediante el uso de software.
                </p>
                <p>
                  En Blender, la renderización convierte las animaciones y configuraciones de 
                  la escena en fotogramas que se combinan para formar un video.
                </p>
              </div>

              <div className="info-card">
                <h3>Proceso de Animación</h3>
                <p>
                  El proceso implica la generación de imágenes individuales para cada cuadro 
                  de la animación.
                </p>
                <p>
                  Estas imágenes se combinan con el audio generado previamente para crear 
                  un archivo de video en formato MP4.
                </p>
              </div>

              <div className="info-card highlight">
                <h3>Optimización</h3>
                <div className="performance-stats">
                  <div className="stat">
                    <div className="stat-label">Inicial</div>
                    <div className="stat-value">8-12s</div>
                    <div className="stat-desc">por frame</div>
                  </div>
                  <div className="stat-arrow">→</div>
                  <div className="stat">
                    <div className="stat-label">Optimizado</div>
                    <div className="stat-value">~3</div>
                    <div className="stat-desc">frames/segundo</div>
                  </div>
                </div>
                <p>
                  Optimizando ajustes y utilizando GPU, redujimos significativamente 
                  el tiempo de renderizado.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'demo' && (
          <section className="section demo-section">
            <h2>Demo del Proyecto</h2>
            <div className="video-container">
              <video controls className="demo-video">
                <source src="untitled.mp4" type="video/quicktime" />
                <source src="untitled.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p className="video-caption">
                Demostración completa del sistema de animación con sincronización labial
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>Proyecto de Mallas Paramétricas - Animación 3D</p>
      </footer>
    </div>
  )
}

export default App

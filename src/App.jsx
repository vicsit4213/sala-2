import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Estilos en línea modernos con efectos de transición y sombras elegantes
  const cardStyle = {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid #e2e8f0',
    color: '#1e293b'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Encabezado Principal */}
        <div style={{ marginBottom: '32px' }}>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: '50px', margin: '0 10px' }} />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" style={{ height: '50px', margin: '0 10px' }} />
          </a>
          <h1 style={{ color: '#0f172a', fontSize: '2.5rem', marginTop: '16px' }}>Panel Educativo Interactivo</h1>
          <p style={{ color: '#64748b' }}>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div>

        {/* Botón de Contador */}
        <div style={{ marginBottom: '40px' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
            }}
          >
            Count is {count}
          </button>
        </div>

        {/* Contenedor de Tarjetas con el Reto de Innovación aplicado */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', textAlign: 'left' }}>
          
          <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>📚 Documentación</h3>
            <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '0.95rem' }}>Explora recursos pedagógicos y guías metodológicas actualizadas.</p>
            <span style={{ display: 'inline-block', background: '#eff6ff', color: '#1d4ed8', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500' }}>Nivel: Básico</span>
          </div>

          <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>🤝 Comunidad Educativa</h3>
            <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '0.95rem' }}>Conecta con colegas y comparte estrategias de enseñanza innovadoras.</p>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500' }}>Nivel: Avanzado</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
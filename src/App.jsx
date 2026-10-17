import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // Estilos con paleta cálida, gradientes suaves y relieve 3D
  const cardStyle = {
    background: 'linear-gradient(145deg, #fffcf8 0%, #fef3c7 100%)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 12px 28px -5px rgba(180, 83, 9, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    border: '1px solid rgba(245, 158, 11, 0.3)',
    transform: 'translateY(0)'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 22px 35px -5px rgba(217, 119, 6, 0.3), 0 15px 15px -5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 12px 28px -5px rgba(180, 83, 9, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
  };

  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      background: 'linear-gradient(135deg, #451a03 0%, #78350f 50%, #9a3412 100%)', 
      minHeight: '100vh', 
      padding: '50px 20px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        maxWidth: '900px', 
        width: '100%', 
        background: 'linear-gradient(160deg, #fffbeb 0%, #fef3c7 100%)', 
        borderRadius: '28px', 
        padding: '40px', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(251, 191, 36, 0.4)'
      }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h1 style={{ color: '#78350f', fontSize: '2.5rem', marginBottom: '10px', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Panel Educativo Interactivo
          </h1>
          <p style={{ color: '#92400e', fontSize: '1.1rem', fontWeight: '500' }}>
            Plataforma de Innovación y Recursos Didácticos
          </p>
        </div>

        {/* Botón 3D Cálido */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 20px -5px rgba(234, 88, 12, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.4)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            🔥 Contador Activo: {count}
          </button>
        </div>

        {/* Tarjetas 3D Cálidas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          
          <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>📚</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#78350f', fontSize: '1.3rem', fontWeight: '700' }}>
              Documentación
            </h3>
            <p style={{ margin: '0 0 20px 0', color: '#92400e', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Explora recursos pedagógicos y guías metodológicas diseñadas con calidez y dinamismo.
            </p>
            <span style={{ 
              display: 'inline-block', 
              background: '#ffedd5', 
              color: '#c2410c', 
              padding: '6px 14px', 
              borderRadius: '10px', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              border: '1px solid #fed7aa'
            }}>
              Nivel: Básico
            </span>
          </div>

          <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>🤝</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#78350f', fontSize: '1.3rem', fontWeight: '700' }}>
              Comunidad Educativa
            </h3>
            <p style={{ margin: '0 0 20px 0', color: '#92400e', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Conecta con colegas y comparte estrategias de enseñanza innovadoras en un ambiente colaborativo.
            </p>
            <span style={{ 
              display: 'inline-block', 
              background: '#fef3c7', 
              color: '#b45309', 
              padding: '6px 14px', 
              borderRadius: '10px', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              border: '1px solid #fde68a'
            }}>
              Nivel: Avanzado
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
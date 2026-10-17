import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const cardStyle = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    transform: 'translateY(0)'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(37, 99, 235, 0.2), 0 15px 15px -5px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh', padding: '50px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '900px', width: '100%', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '2.5rem', marginBottom: '10px', fontWeight: '800', letterSpacing: '-0.5px' }}>Panel Educativo Interactivo</h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Plataforma de Innovación y Recursos Didácticos 3D</p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: 'white',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Contador Activo: {count}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          
          <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📚</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#1e293b', fontSize: '1.3rem', fontWeight: '700' }}>Documentación</h3>
            <p style={{ margin: '0 0 20px 0', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Explora recursos pedagógicos y guías metodológicas con diseño tridimensional avanzado.</p>
            <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1e40af', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>Nivel: Básico</span>
          </div>

          <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🤝</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#1e293b', fontSize: '1.3rem', fontWeight: '700' }}>Comunidad Educativa</h3>
            <p style={{ margin: '0 0 20px 0', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Conecta con colegas y comparte estrategias de enseñanza innovadoras e interactivas.</p>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>Nivel: Avanzado</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
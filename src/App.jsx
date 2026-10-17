import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('inicio')
  const [quoteCount, setQuoteCount] = useState(0)

  // Estilos base
  const navButtonStyle = (tab) => ({
    background: 'transparent',
    border: 'none',
    color: activeTab === tab ? '#ea580c' : '#475569',
    fontWeight: activeTab === tab ? '700' : '500',
    fontSize: '0.95rem',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    borderBottom: activeTab === tab ? '2px solid #ea580c' : '2px solid transparent'
  })

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '32px 24px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  }

  const handleCardHover = (e, hover) => {
    e.currentTarget.style.transform = hover ? 'translateY(-6px)' : 'translateY(0)'
    e.currentTarget.style.boxShadow = hover 
      ? '0 20px 30px -10px rgba(234, 88, 12, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      : '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)'
    e.currentTarget.style.borderColor = hover ? '#fed7aa' : '#f1f5f9'
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#fafaf9', color: '#1c1917', minHeight: '100vh', margin: 0 }}>
      
      {/* 1. Header / Barra de Navegación */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e7e5e4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', fontSize: '1.4rem', color: '#1c1917' }}>
            <span style={{ background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', color: 'white', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)' }}>
              ⚡
            </span>
            <span>WebMaster<span style={{ color: '#ea580c' }}>.Studio</span></span>
          </div>

          {/* Menú Navegación */}
          <nav style={{ display: 'flex', gap: '10px' }}>
            <button style={navButtonStyle('inicio')} onClick={() => setActiveTab('inicio')}>Inicio</button>
            <button style={navButtonStyle('servicios')} onClick={() => setActiveTab('servicios')}>Servicios</button>
            <button style={navButtonStyle('planes')} onClick={() => setActiveTab('planes')}>Planes</button>
          </nav>

          {/* Botón CTA Header */}
          <button 
            onClick={() => setQuoteCount(prev => prev + 1)}
            style={{
              background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            Cotizar Proyecto ({quoteCount})
          </button>
        </div>
      </header>

      {/* 2. Hero Section / Portada Principal */}
      <section style={{ padding: '80px 24px 60px 24px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#ffedd5', color: '#c2410c', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px', border: '1px solid #fed7aa' }}>
          🚀 AGENCIA DE DESARROLLO Y DISEÑO WEB
        </div>
        
        <h1 style={{ fontSize: '3.2rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '20px', color: '#0c0a09', letterSpacing: '-1px' }}>
          Transformamos ideas en <span style={{ background: 'linear-gradient(135deg, #ea580c 0%, #d97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experiencias Digitales</span> de Alto Impacto
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: '#57534e', lineHeight: '1.6', marginBottom: '36px', maxWidth: '720px', margin: '0 auto 36px auto' }}>
          Diseño web moderno, optimizado para conversión, rápido y adaptado a todas las plataformas. Elevamos la presencia en línea de tu negocio o institución.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setQuoteCount(prev => prev + 1)}
            style={{
              background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
              color: 'white',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(234, 88, 12, 0.35)',
              transition: 'transform 0.2s ease'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Solicitar Asesoría Gratuita
          </button>
          
          <button style={{
            background: '#ffffff',
            color: '#292524',
            border: '1px solid #d6d3d1',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
          }}>
            Ver Portafolio
          </button>
        </div>

        {/* Métrica de Confianza */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #e7e5e4' }}>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ea580c' }}>+150</div>
            <div style={{ fontSize: '0.85rem', color: '#78716c' }}>Proyectos Entregados</div>
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ea580c' }}>99.8%</div>
            <div style={{ fontSize: '0.85rem', color: '#78716c' }}>Clientes Satisfechos</div>
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ea580c' }}>24/7</div>
            <div style={{ fontSize: '0.85rem', color: '#78716c' }}>Soporte Técnico</div>
          </div>
        </div>
      </section>

      {/* 3. Sección de Servicios */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1c1917', marginBottom: '12px' }}>Soluciones Web Profesionales</h2>
          <p style={{ color: '#78716c', fontSize: '1.05rem' }}>Estrategias tecnológicas adaptadas a cada necesidad</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          
          <div style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
            <div style={{ width: '48px', height: '48px', background: '#ffedd5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
              🎨
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '12px', color: '#1c1917' }}>Diseño Web a Medida</h3>
            <p style={{ color: '#57534e', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Sitios web únicos e intuitivos diseñados desde cero, enfocados en reflejar la identidad visual de tu marca.
            </p>
            <span style={{ color: '#ea580c', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Saber más →
            </span>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
            <div style={{ width: '48px', height: '48px', background: '#fef3c7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
              🛒
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '12px', color: '#1c1917' }}>Tiendas En Línea (E-Commerce)</h3>
            <p style={{ color: '#57534e', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Plataformas de venta automatizadas con pasarelas de pago integradas, carrito de compras y gestión de inventario.
            </p>
            <span style={{ color: '#ea580c', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Saber más →
            </span>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
            <div style={{ width: '48px', height: '48px', background: '#ffedd5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '12px', color: '#1c1917' }}>Optimización & SEO</h3>
            <p style={{ color: '#57534e', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Mejoramos la velocidad de carga y posicionado en buscadores como Google para captar más clientes potenciales.
            </p>
            <span style={{ color: '#ea580c', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Saber más →
            </span>
          </div>

        </div>
      </section>

      {/* 4. Pie de Página / Footer */}
      <footer style={{ background: '#1c1917', color: '#a8a29e', padding: '40px 24px', textAlign: 'center', marginTop: '60px', borderTop: '1px solid #292524' }}>
        <p style={{ fontSize: '0.95rem', margin: '0 0 10px 0' }}>
          © 2026 WebMaster Studio. Todos los derechos reservados.
        </p>
        <p style={{ fontSize: '0.85rem', color: '#78716c', margin: 0 }}>
          Desarrollado con React + Vite & desplegado en Vercel.
        </p>
      </footer>

    </div>
  )
}

export default App
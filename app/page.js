export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          margin: '0 0 20px 0'
        }}>
          🚀 Dashboard
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          margin: '0 0 40px 0'
        }}>
          Collaborative workspace deployed successfully!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#eff6ff',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #dbeafe'
          }}>
            <h3 style={{
              color: '#1e40af',
              margin: '0 0 10px 0',
              fontSize: '1.1rem'
            }}>
              Teams
            </h3>
            <p style={{
              color: '#3b82f6',
              fontSize: '0.9rem',
              margin: '0'
            }}>
              Ready to build
            </p>
          </div>

          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #dcfce7'
          }}>
            <h3 style={{
              color: '#166534',
              margin: '0 0 10px 0',
              fontSize: '1.1rem'
            }}>
              Files
            </h3>
            <p style={{
              color: '#22c55e',
              fontSize: '0.9rem',
              margin: '0'
            }}>
              Ready to build
            </p>
          </div>

          <div style={{
            backgroundColor: '#fef7ff',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #f3e8ff'
          }}>
            <h3 style={{
              color: '#7c2d12',
              margin: '0 0 10px 0',
              fontSize: '1.1rem'
            }}>
              Agent
            </h3>
            <p style={{
              color: '#a855f7',
              fontSize: '0.9rem',
              margin: '0'
            }}>
              Ready to build
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f8fafc',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '0.95rem',
          color: '#64748b',
          border: '1px solid #e2e8f0'
        }}>
          ✅ <strong>Deployment successful!</strong><br/>
          Foundation ready for collaborative features
        </div>
      </div>
    </main>
  )
}
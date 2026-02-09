export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        textAlign: 'center',
        maxWidth: '800px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '4rem',
          color: '#1a1a1a',
          marginBottom: '20px',
          fontWeight: 'bold',
          lineHeight: '1.1'
        }}>
          🚀 Dashboard
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          color: '#666',
          marginBottom: '40px',
          fontWeight: '300'
        }}>
          Your collaborative workspace is live!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: '#f8faff',
            padding: '30px 20px',
            borderRadius: '12px',
            border: '2px solid #e0e7ff',
            transition: 'transform 0.2s'
          }}>
            <h3 style={{ 
              color: '#3730a3', 
              margin: '0 0 15px 0',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Team Management
            </h3>
            <p style={{ 
              color: '#6366f1', 
              fontSize: '0.95rem', 
              margin: 0,
              fontStyle: 'italic'
            }}>
              Coming soon...
            </p>
          </div>

          <div style={{
            backgroundColor: '#f0fdf9',
            padding: '30px 20px',
            borderRadius: '12px',
            border: '2px solid #d1fae5'
          }}>
            <h3 style={{ 
              color: '#166534', 
              margin: '0 0 15px 0',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              File System
            </h3>
            <p style={{ 
              color: '#16a34a', 
              fontSize: '0.95rem', 
              margin: 0,
              fontStyle: 'italic'
            }}>
              Coming soon...
            </p>
          </div>

          <div style={{
            backgroundColor: '#fefbff',
            padding: '30px 20px',
            borderRadius: '12px',
            border: '2px solid #f3e8ff'
          }}>
            <h3 style={{ 
              color: '#6b21a8', 
              margin: '0 0 15px 0',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Agent Integration
            </h3>
            <p style={{ 
              color: '#a855f7', 
              fontSize: '0.95rem', 
              margin: 0,
              fontStyle: 'italic'
            }}>
              Coming soon...
            </p>
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#f1f5f9',
          borderRadius: '12px',
          fontSize: '1rem',
          color: '#475569',
          border: '1px solid #e2e8f0'
        }}>
          <strong style={{ color: '#22c55e' }}>✅ Deployment Successful!</strong>
          <br />
          Dashboard is ready for collaborative features
        </div>
      </div>
    </div>
  )
}
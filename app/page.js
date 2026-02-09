export default function Home() {
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
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          🚀 Dashboard
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '30px'
        }}>
          Your collaborative workspace is live!
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #e0f2fe'
          }}>
            <h3 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>Team Management</h3>
            <p style={{ color: '#0284c7', fontSize: '0.9rem', margin: 0 }}>Coming soon...</p>
          </div>
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #dcfce7'
          }}>
            <h3 style={{ color: '#166534', margin: '0 0 10px 0' }}>File System</h3>
            <p style={{ color: '#16a34a', fontSize: '0.9rem', margin: 0 }}>Coming soon...</p>
          </div>
          <div style={{
            backgroundColor: '#faf5ff',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #e9d5ff'
          }}>
            <h3 style={{ color: '#7c2d12', margin: '0 0 10px 0' }}>Agent Integration</h3>
            <p style={{ color: '#a855f7', fontSize: '0.9rem', margin: 0 }}>Coming soon...</p>
          </div>
        </div>
        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f8fafc',
          borderRadius: '10px',
          fontSize: '0.9rem',
          color: '#64748b'
        }}>
          ✅ Successfully deployed to Vercel!<br/>
          Ready to add collaborative features.
        </div>
      </div>
    </main>
  )
}
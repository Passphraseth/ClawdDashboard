// NO CSS IMPORTS - ALL STYLES INLINE ONLY

export const metadata = {
  title: 'Team Dashboard',
  description: 'Collaborative workspace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  )
}
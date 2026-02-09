export const metadata = {
  title: 'Dashboard',
  description: 'Team collaboration workspace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}
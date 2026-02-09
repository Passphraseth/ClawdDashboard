export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🚀 Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Collaborative workspace is live!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800">Team Management</h3>
              <p className="text-blue-600 text-sm">Coming soon...</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800">File System</h3>
              <p className="text-green-600 text-sm">Coming soon...</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800">Agent Integration</h3>
              <p className="text-purple-600 text-sm">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
import React from 'react';
import { Github, Wallet, Layout, Monitor, Cuboid as Cube } from 'lucide-react';
import { MetaverseScene } from './components/MetaverseScene';
import { WebcamMirror } from './components/WebcamMirror';
import { useWeb3 } from './hooks/useWeb3';

function App() {
  const { account, error, connectWallet } = useWeb3();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header Section */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cube className="w-8 h-8 text-indigo-500" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Metaverse Portal
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            {!account ? (
              <button
                onClick={connectWallet}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">
                  {account.slice(0, 6)}...{account.slice(-4)}
                </span>
              </div>
            )}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Features Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Metaverse Viewer */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Layout className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-lg font-semibold">Metaverse Scene</h2>
                </div>
              </div>
              <div className="aspect-video">
                <MetaverseScene />
              </div>
            </div>

            {/* Webcam Mirror */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-lg font-semibold">Digital Mirror</h2>
                </div>
              </div>
              <div className="p-4 flex items-center justify-center">
                <WebcamMirror />
              </div>
            </div>
          </div>
        </section>

        {/* Error Messages */}
        {error && (
          <div className="fixed bottom-4 right-4 bg-red-500/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg">
            <p className="text-sm">{error}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
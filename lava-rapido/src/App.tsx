import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import { AgendamentosProvider } from './context/AgendamentosContext.tsx'

export default function App() {
  return (
    <AgendamentosProvider>
      <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900 antialiased selection:bg-zinc-950 selection:text-white">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AgendamentosProvider>
  )
}
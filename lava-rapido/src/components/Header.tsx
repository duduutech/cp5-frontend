import { Link, NavLink } from 'react-router-dom'
import { useAgendamentos } from '../context/AgendamentosContext.tsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/precos', label: 'Preços' },
  { to: '/agendamentos', label: 'Agendamentos' },
  { to: '/sobre', label: 'Sobre' },
]

export default function Header() {
  const { agendamentos } = useAgendamentos()
  const total = agendamentos.length

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="group flex items-center gap-2 font-sans text-lg font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80 focus-visible:outline-none"
        >
          <span>BOLHA</span>
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
          <span className="font-light text-zinc-400">AUTO</span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative py-1 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-white" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 backdrop-blur-sm"
          aria-live="polite"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-300" />
          </span>
          <span className="font-mono text-xs font-semibold text-white">{total}</span>
          <span className="text-xs font-medium text-zinc-400">
            {total === 1 ? 'veículo na fila' : 'veículos na fila'}
          </span>
        </div>
      </div>
    </header>
  )
}
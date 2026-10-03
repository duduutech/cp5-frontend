import CartaoIntegrante from '../components/CartaoIntegrante.tsx'
import { integrantes } from '../data/integrantes.ts'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-zinc-50/50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
      
        <header className="max-w-2xl">
          
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Sobre o Projeto
          </h1>
         
        </header>

       
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 backdrop-blur-sm">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Instituição</span>
            <p className="mt-1 font-sans text-sm font-semibold text-zinc-900">FIAP</p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 backdrop-blur-sm">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Disciplina</span>
            <p className="mt-1 font-sans text-sm font-semibold text-zinc-900">Front-End Design</p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 backdrop-blur-sm">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Etapa</span>
            <p className="mt-1 font-sans text-sm font-semibold text-zinc-900">Checkpoint 5</p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 backdrop-blur-sm">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Equipe</span>
            <p className="mt-1 font-sans text-sm font-semibold text-zinc-900">{integrantes.length} Membros</p>
          </div>
        </div>

        <section aria-labelledby="titulo-integrantes" className="mt-14">
          <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4">
            <h2 id="titulo-integrantes" className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Integrantes da Equipe
            </h2>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrantes.map((i) => (
              <li key={i.rm}>
                <CartaoIntegrante integrante={i} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
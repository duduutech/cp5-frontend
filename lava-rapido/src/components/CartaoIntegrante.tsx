import { useState } from 'react'
import type { Integrante } from '../data/integrantes.ts'

export default function CartaoIntegrante({ integrante }: { integrante: Integrante }) {
  const [semFoto, setSemFoto] = useState(false)
  const iniciais = integrante.nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

  return (
    <article className="group flex flex-col items-center rounded-2xl border border-zinc-200/80 bg-white/90 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50">
      
      <div className="relative mb-5 flex items-center justify-center">
        {semFoto ? (
          <div
            role="img"
            aria-label={`Foto de ${integrante.nome}`}
            className="flex size-24 items-center justify-center rounded-full bg-zinc-900 font-sans text-xl font-medium tracking-wider text-white shadow-inner"
          >
            {iniciais}
          </div>
        ) : (
          <div className="size-24 overflow-hidden rounded-full p-0.5 ring-1 ring-zinc-300 transition-all duration-300 group-hover:ring-zinc-900">
            <img
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              onError={() => setSemFoto(true)}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}
      </div>

     
      <h3 className="font-sans text-base font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-black">
        {integrante.nome}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
        {integrante.rm}
      </p>
    </article>
  )
}
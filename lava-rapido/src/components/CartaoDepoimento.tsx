import type { Depoimento } from '../data/depoimentos.ts'

export default function CartaoDepoimento({ depoimento }: { depoimento: Depoimento }) {
  return (
    <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
        <img
          src={depoimento.foto}
          alt={`${depoimento.carro} depois da lavagem`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>


      <figcaption className="flex flex-1 flex-col justify-between p-6">
        <blockquote className="text-sm font-normal leading-relaxed text-zinc-600">
          “{depoimento.texto}”
        </blockquote>

        <div className="mt-6 border-t border-zinc-100 pt-4">
          <p className="font-sans text-sm font-semibold tracking-tight text-zinc-900">
            {depoimento.cliente}
          </p>
          <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-0.5">
            {depoimento.carro}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
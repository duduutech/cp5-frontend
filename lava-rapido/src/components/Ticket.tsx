import type { Agendamento } from '../types/index.ts'

interface TicketProps {
  agendamento: Agendamento
  numero: number
  onExcluir: (id: string) => void
}

export default function Ticket({ agendamento, numero, onExcluir }: TicketProps) {
  const { id, cliente, modelo, placa, tipo } = agendamento

  return (
    <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs font-bold text-zinc-400">
          #{String(numero).padStart(2, '0')}
        </div>

        <div>
          <div className="flex items-center gap-2.5">
            <h4 className="font-bold text-white text-base leading-none">{cliente}</h4>
            <span className="font-mono text-xs font-bold uppercase rounded border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-zinc-200">
              {placa}
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-xs text-zinc-400">
            <span>{modelo}</span>
            <span>•</span>
            <span className="text-zinc-300 font-medium">{tipo}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:justify-start">
        <button
          type="button"
          onClick={() => onExcluir(id)}
          className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:border-zinc-500 hover:bg-white hover:text-zinc-950 transition-all"
          aria-label={`Concluir atendimento de ${cliente}`}
        >
          Finalizar
        </button>
      </div>
    </article>
  )
}
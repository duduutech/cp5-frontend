import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Ticket from '../components/Ticket.tsx'
import { useAgendamentos } from '../context/AgendamentosContext.tsx'
import { servicos } from '../data/servicos.ts'

export default function Agendamentos() {
  const context = useAgendamentos() as any
  const agendamentos = context.agendamentos || []
  const adicionar = context.adicionarAgendamento || context.adicionar || context.criarAgendamento
  const remover = context.removerAgendamento || context.remover || context.excluirAgendamento

  const [cliente, setCliente] = useState('')
  const [modelo, setModelo] = useState('')
  const [placa, setPlaca] = useState('')
  const [tipo, setTipo] = useState<string>(servicos[0]?.tipo || 'Simples')

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!cliente.trim() || !modelo.trim() || !placa.trim()) {
      alert('Preencha os campos obrigatórios do veículo.')
      return
    }

    if (adicionar) {
      adicionar({
        cliente: cliente.trim(),
        modelo: modelo.trim(),
        placa: placa.trim().toUpperCase(),
        tipo,
      })
    }

    setCliente('')
    setModelo('')
    setPlaca('')
    setTipo(servicos[0]?.tipo || 'Simples')
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-white selection:text-zinc-950">
      <section className="relative flex h-screen w-full flex-col justify-between overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/carro-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        />

        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Painel Operacional
          </span>

          <h1 className="mt-4 text-5xl sm:text-7xl font-black tracking-tight text-white">
            Agendamento
          </h1>

          <div className="mt-8 flex justify-center">
            <a
              href="#area-agendamentos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-widest text-zinc-950 hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
            >
              Emitir Nova Entrada
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-lg text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            A forma mais rápida de organizar as boxes, atribuir ordens de serviço e acompanhar o pátio em tempo real.
          </p>
        </motion.div>

        <div className="relative z-10 mb-8 flex justify-center">
          <a
            href="#area-agendamentos"
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">
              Rolar para gerir fila
            </span>
            <div className="flex h-8 w-4 justify-center rounded-full border border-zinc-500 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" />
            </div>
          </a>
        </div>
      </section>

      <section id="area-agendamentos" className="mx-auto max-w-6xl px-6 py-28 scroll-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800 pb-6 mb-12"
        >
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
              Controlo de Boxes
            </span>
            <h2 className="mt-1 text-3xl font-black text-white uppercase tracking-tight">
              Registo & Fila de Espera
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 self-start sm:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-300" />
            </span>
            <span className="text-xs text-zinc-400">Atendimentos em aberto:</span>
            <span className="font-mono font-bold text-white">{agendamentos.length}</span>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur"
          >
            <h3 className="text-base font-bold uppercase tracking-wide text-white">
              Nova Ordem de Serviço
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-6">
              Introduza os dados da viatura para gerar a credencial de pista[cite: 1].
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cliente" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                  Nome do Cliente
                </label>
                <input
                  id="cliente"
                  type="text"
                  placeholder="Nome completo do condutor"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-zinc-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modelo" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                  Modelo do Veículo
                </label>
                <input
                  id="modelo"
                  type="text"
                  placeholder="Ex.: BYD Seal, Song Plus, Dolphin..."
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-zinc-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="placa" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                  Matrícula / Placa
                </label>
                <input
                  id="placa"
                  type="text"
                  placeholder="ABC1D23"
                  maxLength={8}
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  className="w-full font-mono uppercase rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-zinc-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                  Tipo de Lavagem
                </label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as any)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-zinc-400 focus:outline-none transition-colors"
                >
                  {servicos.map((s) => (
                    <option key={s.tipo} value={s.tipo}>
                      {s.tipo} — {s.preco}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-lg bg-white py-3 text-xs font-bold uppercase tracking-widest text-zinc-950 hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
              >
                + Gerar Tíquete
              </button>
            </form>
          </motion.div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-850 pb-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                Veículos no Pátio ({agendamentos.length})
              </h3>
            </div>

            {agendamentos.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 p-12 text-center"
              >
                <p className="text-sm font-semibold text-zinc-300">Sem viaturas na fila</p>
                <p className="text-xs text-zinc-500 mt-1">
                  Registe uma nova entrada no formulário ao lado para emitir o tíquete de pista[cite: 1].
                </p>
              </motion.div>
            ) : (
              <div className="space-y-3">
                {agendamentos.map((agendamento: any, index: number) => (
                  <motion.div
                    key={agendamento.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Ticket
                      agendamento={agendamento}
                      numero={index + 1}
                      onExcluir={(id: string) => {
                        if (remover) remover(id)
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-white selection:text-zinc-950">
      <section className="relative flex h-screen w-full flex-col justify-between overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/carro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        />

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="relative z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl text-white">
            Entregue as chaves. <br />
            <span className="text-zinc-400">Volte para o impecável.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg leading-relaxed">
            Tratamento técnico, lavagem detalhada e agendamento digital inteligente.
            Acompanhamento do veículo em tempo real por ordem de serviço.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/agendamentos"
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Agendar Horário
            </Link>
            <Link
              to="/precos"
              className="rounded-lg border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors backdrop-blur"
            >
              Consultar Preços
            </Link>
          </div>
        </motion.div>

        <div className="relative z-10 mb-8 flex justify-center">
          <a
            href="#galeria-destaques"
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">
              Rolar para explorar
            </span>
            <div className="flex h-8 w-4 justify-center rounded-full border border-zinc-500 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" />
            </div>
          </a>
        </div>
      </section>

      <section id="galeria-destaques" className="w-full scroll-mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative h-[70vh] min-h-[460px] overflow-hidden bg-zinc-900"
          >
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80"
              alt="BYD Seal - Detalhamento e Proteção Cerâmica"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Linha Ocean • BYD Seal
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Proteção Cerâmica & Vidros
              </h3>
              <Link to="/precos" className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span>Ver tabela de serviços</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative h-[70vh] min-h-[460px] overflow-hidden bg-zinc-900 border-t md:border-t-0 md:border-l border-zinc-800"
          >
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80"
              alt="BYD Han - Boxes de Tratamento Premium"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Série Dynasty • BYD Han
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Boxes de Tratamento Premium
              </h3>
              <Link to="/agendamentos" className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span>Acompanhar fila de box</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative h-[70vh] min-h-[460px] overflow-hidden bg-zinc-900 border-t border-zinc-800"
          >
            <img
              src="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1600&q=80"
              alt="BYD Song Plus - Selagem de Pintura e Brilho"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                SUV DM-i • BYD Song Plus
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Selagem de Pintura e Brilho
              </h3>
              <Link to="/precos" className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span>Conferir valores</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative h-[70vh] min-h-[460px] overflow-hidden bg-zinc-900 border-t md:border-l border-zinc-800"
          >
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80"
              alt="BYD Dolphin - Higienização e Cockpit Digital"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Linha Ocean • BYD Dolphin
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Higienização & Cockpit Digital
              </h3>
              <Link to="/precos" className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span>Avaliações e preços</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
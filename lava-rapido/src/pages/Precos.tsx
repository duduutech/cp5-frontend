import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CartaoDepoimento from '../components/CartaoDepoimento.tsx'
import { depoimentos } from '../data/depoimentos.ts'
import { servicos } from '../data/servicos.ts'

const imagensServicos: Record<string, string> = {
  Simples:
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80',
  Completa:
    'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
  Detalhada:
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
  'A seco':
    'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80',
}

export default function Precos() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-zinc-950 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
            Catálogo e Valores
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Planos de Tratamento e Valores
          </h1>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Conheça o detalhe de cada processo técnico desenhado para conservar a estética original, proteger a pintura e higienizar o habitáculo do veículo.
          </p>
        </motion.div>

        <div className="space-y-32">
          {servicos.map((servico, index) => {
            const isPar = index % 2 === 0
            const imagemUrl =
              imagensServicos[servico.tipo] ||
              'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'

            return (
              <motion.article
                key={servico.tipo}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`flex flex-col items-center gap-12 lg:gap-20 ${
                  isPar ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    {servico.tipo}
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
                    {servico.descricao}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-zinc-850 pb-6">
                    <span className="font-mono text-4xl sm:text-5xl font-black text-white">
                      {servico.preco}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to="/agendamentos"
                      className="rounded-lg bg-white px-7 py-3 text-xs font-bold uppercase tracking-widest text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg active:scale-95"
                    >
                      Agendar Horário
                    </Link>
                    <Link
                      to="/sobre"
                      className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      Conhecer a Equipa
                    </Link>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                    <img
                      src={imagemUrl}
                      alt={`Serviço de lavagem ${servico.tipo}`}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <section className="mt-40 border-t border-zinc-800 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-b border-zinc-800 pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                Experiências Reais
              </span>
              <h2 className="mt-1 text-3xl font-black text-white">Opinião de Clientes</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Avaliações de condutores e viaturas atendidas na nossa pista.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, index) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
              >
                <CartaoDepoimento key={d.id} depoimento={d} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
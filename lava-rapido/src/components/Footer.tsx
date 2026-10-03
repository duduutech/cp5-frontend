const ano = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-sans text-lg font-black uppercase tracking-[0.15em] text-white">
            Bolha <span className="font-light text-zinc-500">Auto</span>
          </p>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Seu carro limpo sem perder o dia.
          </p>
        </div>

        <address className="text-sm not-italic leading-relaxed">
          <p className="font-bold uppercase tracking-wider text-xs text-white">Endereço</p>
          <p className="mt-2 text-zinc-400">FIAP, Paulista</p>
          <p className="text-zinc-500">Paulista, São Paulo - SP</p>
        </address>

        <div className="text-sm leading-relaxed">
          <p className="font-bold uppercase tracking-wider text-xs text-white">Horário</p>
          <p className="mt-2 text-zinc-400">Segunda a sábado, 8h às 18h</p>
          <p className="text-zinc-500">Domingo, 9h às 14h</p>
        </div>
      </div>

      <div className="border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
        © {ano} Bolha Auto. CP5 FIAP.
      </div>
    </footer>
  )
}
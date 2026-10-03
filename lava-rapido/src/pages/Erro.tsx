import { Link } from 'react-router-dom'

export default function Erro() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-espuma p-6 text-center font-sans text-tinta">
      <h1 className="font-display text-5xl font-extrabold">Página não encontrada</h1>
      <p>O endereço que você abriu não existe.</p>
      <Link to="/" className="rounded-full bg-petroleo px-6 py-3 font-semibold text-espuma">
        Voltar para a Home
      </Link>
    </main>
  )
}

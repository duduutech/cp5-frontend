import { useState } from 'react'
import type { ChangeEvent, SyntheticEvent } from 'react'
import { tiposLavagem } from '../data/servicos.ts'
import type { TipoLavagem } from '../types/index.ts'

interface FormAgendamentoProps {
  onSalvar: (dados: { cliente: string; modelo: string; placa: string; tipo: TipoLavagem }) => void
}

interface Erros {
  cliente?: string
  modelo?: string
  placa?: string
}

const PLACA_VALIDA = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/

const inicial = { cliente: '', modelo: '', placa: '', tipo: 'Simples' as TipoLavagem }

const inputEstilo =
  'mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900'

const labelEstilo = 'block text-xs font-semibold uppercase tracking-wider text-zinc-500'

export default function FormAgendamento({ onSalvar }: FormAgendamentoProps) {
  const [valores, setValores] = useState(inicial)
  const [erros, setErros] = useState<Erros>({})

  function alterar(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setValores((atual) => ({
      ...atual,
      [name]: name === 'placa' ? value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7) : value,
    }))
  }

  function enviar(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const novos: Erros = {}
    if (valores.cliente.trim().length < 3) novos.cliente = 'Informe o nome do cliente (mínimo 3 letras).'
    if (valores.modelo.trim().length < 2) novos.modelo = 'Informe o modelo do carro.'
    if (!PLACA_VALIDA.test(valores.placa)) novos.placa = 'Placa inválida. Exemplos: ABC1234 ou ABC1D23.'

    setErros(novos)
    if (Object.keys(novos).length > 0) return

    onSalvar({
      cliente: valores.cliente.trim(),
      modelo: valores.modelo.trim(),
      placa: valores.placa,
      tipo: valores.tipo,
    })
    setValores(inicial)
  }

  return (
    <form
      onSubmit={enviar}
      noValidate
      className="space-y-5 rounded-2xl border border-zinc-200/80 bg-white/95 p-8 shadow-xl shadow-zinc-200/40 backdrop-blur-md"
    >
      <div>
        <label htmlFor="cliente" className={labelEstilo}>
          Nome do cliente
        </label>
        <input
          id="cliente"
          name="cliente"
          type="text"
          placeholder="Ex.: Carlos Eduardo"
          value={valores.cliente}
          onChange={alterar}
          aria-invalid={!!erros.cliente}
          aria-describedby={erros.cliente ? 'erro-cliente' : undefined}
          className={`${inputEstilo} ${erros.cliente ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {erros.cliente && <p id="erro-cliente" className="mt-1.5 text-xs text-red-500">{erros.cliente}</p>}
      </div>

      <div>
        <label htmlFor="modelo" className={labelEstilo}>
          Modelo do veículo
        </label>
        <input
          id="modelo"
          name="modelo"
          type="text"
          placeholder="Ex.: Dolphin Plus, Seal..."
          value={valores.modelo}
          onChange={alterar}
          aria-invalid={!!erros.modelo}
          aria-describedby={erros.modelo ? 'erro-modelo' : undefined}
          className={`${inputEstilo} ${erros.modelo ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {erros.modelo && <p id="erro-modelo" className="mt-1.5 text-xs text-red-500">{erros.modelo}</p>}
      </div>

      <div>
        <label htmlFor="placa" className={labelEstilo}>
          Placa
        </label>
        <input
          id="placa"
          name="placa"
          type="text"
          placeholder="BRA2E19"
          value={valores.placa}
          onChange={alterar}
          aria-invalid={!!erros.placa}
          aria-describedby={erros.placa ? 'erro-placa' : undefined}
          className={`${inputEstilo} font-mono tracking-widest ${erros.placa ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {erros.placa && <p id="erro-placa" className="mt-1.5 text-xs text-red-500">{erros.placa}</p>}
      </div>

      <div>
        <label htmlFor="tipo" className={labelEstilo}>
          Tipo de lavagem
        </label>
        <div className="relative">
          <select
            id="tipo"
            name="tipo"
            value={valores.tipo}
            onChange={alterar}
            className={`${inputEstilo} appearance-none cursor-pointer pr-10`}
          >
            {tiposLavagem.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400">
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-zinc-950 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-zinc-800 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
      >
        Confirmar Agendamento
      </button>
    </form>
  )
}
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Agendamento } from '../types/index.ts'

interface AgendamentosContextData {
  agendamentos: Agendamento[]
  adicionar: (dados: Omit<Agendamento, 'id'>) => void
  remover: (id: string) => void
}

const CHAVE = 'lava-rapido:agendamentos'

const AgendamentosContext = createContext<AgendamentosContextData | null>(null)

function carregar(): Agendamento[] {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? (JSON.parse(salvo) as Agendamento[]) : []
  } catch {
    return []
  }
}

export function AgendamentosProvider({ children }: { children: ReactNode }) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>(carregar)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(agendamentos))
    } catch {
   
    }
  }, [agendamentos])

  function adicionar(dados: Omit<Agendamento, 'id'>) {
    setAgendamentos((atual) => [...atual, { ...dados, id: crypto.randomUUID() }])
  }

  function remover(id: string) {
    setAgendamentos((atual) => atual.filter((a) => a.id !== id))
  }

  return (
    <AgendamentosContext.Provider value={{ agendamentos, adicionar, remover }}>
      {children}
    </AgendamentosContext.Provider>
  )
}

export function useAgendamentos() {
  const ctx = useContext(AgendamentosContext)
  if (!ctx) throw new Error('useAgendamentos deve ser usado dentro de AgendamentosProvider')
  return ctx
}

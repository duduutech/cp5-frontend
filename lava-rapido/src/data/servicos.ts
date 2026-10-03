import type { TipoLavagem } from '../types/index.ts'

export interface Servico {
  tipo: TipoLavagem
  descricao: string
  preco: string
  duracao: string
}

export const servicos: Servico[] = [
  { tipo: 'Simples', descricao: 'Lavagem externa com shampoo neutro e secagem.', preco: 'R$ 40', duracao: '20 min' },
  { tipo: 'Completa', descricao: 'Externa e interna: aspiração, painel e vidros.', preco: 'R$ 70', duracao: '40 min' },
  { tipo: 'Detalhada', descricao: 'Completa com cera, hidratação de bancos e pneus.', preco: 'R$ 140', duracao: '90 min' },
  { tipo: 'A seco', descricao: 'Sem água, com produtos ecológicos. Ideal para dias de racionamento.', preco: 'R$ 55', duracao: '30 min' },
]

export const tiposLavagem: TipoLavagem[] = servicos.map((s) => s.tipo)
